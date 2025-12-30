import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Github } from "lucide-react";


const GITHUB_USERNAME = "patelkameshwar";

/* -------------------- Types -------------------- */
interface Repo {
  name: string;
  description?: string;
  stars: number;
  forks: number;
  language?: string;
  html_url: string;
}

interface UserProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  public_repos: number;
  html_url: string;
}

/* -------------------- Component -------------------- */
export function GitHub() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* Fetch user profile */
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then(res => res.json())
      .then(data => setUser(data));

    /* Fetch latest repositories */
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&direction=desc&per_page=3`
    )
      .then(res => res.json())
      .then(data =>
        setRepos(
          data.map((repo: any) => ({
            name: repo.name,
            description: repo.description || "No description available",
            stars: repo.stargazers_count,
            forks: repo.forks,
            language: repo.language || "Unknown",
            html_url: repo.html_url,
          }))
        )
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="github" className="py-20">
      <div className="container mx-auto max-w-6xl px-8">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          GitHub Contributions
        </h2>

        {/* ---------------- Contribution Calendar ---------------- */}
        <div className="mb-12 flex flex-col items-center">
          <div className="w-full p-6 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
            <GitHubCalendar
              username={GITHUB_USERNAME}
              blockSize={14.6}
              blockMargin={5}
              colorScheme="light"
              theme={{
                light: ["#afb8c2", "#60a5fa", "#1a53e6", "#1c3dff", "#1c3dff"],
              }}
            />
          </div>

          <p className="mt-8 text-lg text-center text-gray-600 dark:text-gray-300 max-w-5xl">
             My GitHub contributions reflect my consistent commitment to open-source development and personal projects. Explore my repositories to learn more about the projects I've worked on and the skills I bring to the table.
          </p>
        </div>

        {/* ---------------- Repositories ---------------- */}
        {loading ? (
          <p className="text-center text-gray-500">Loading repositories...</p>
        ) : (
          <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {repos.map(repo => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  {repo.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {repo.description}
                </p>

                <div className="mt-4 flex items-center justify-between text-gray-500">
                  <span>{repo.language}</span>
                  <div className="flex space-x-4">
                    <span>⭐ {repo.stars}</span>
                    <span>🍴 {repo.forks}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* ---------------- Profile Card ---------------- */}
        {user && (
          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-6 shadow-lg">
            <div className="flex items-center space-x-4">
              <img
                src={user.avatar_url}
                alt="GitHub Avatar"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-blue-600"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{user.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">@{user.login}</p>
              </div>
            </div>

            <p className="hidden md:block text-gray-700 dark:text-gray-300 flex-1 text-center md:text-left mx-6">
              {user.bio}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-6 text-gray-600 dark:text-gray-400 mt-4 md:mt-0">
              <span className="flex items-center gap-1 text-sm">👥 {user.followers} Followers</span>
              <span className="flex items-center gap-1 text-sm">📦 {user.public_repos} Repos</span>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto text-center flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700  hover:scale-105 transition-all mt-3 md:mt-0"
              >
                <Github className="w-5 h-5" /> View Profile
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
