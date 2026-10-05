import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Github } from "lucide-react";

const GITHUB_USERNAME = "patelkameshwar";

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

export function GitHub() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&direction=desc&per_page=6`
          ),
        ]);

        if (!userResponse.ok || !reposResponse.ok) {
          throw new Error("Failed to fetch GitHub data");
        }

        const userData = await userResponse.json();
        const reposData = await reposResponse.json();

        setUser(userData);

        setRepos(
          reposData.map((repo: any) => ({
            name: repo.name,
            description:
              repo.description || "No description available.",
            stars: repo.stargazers_count,
            forks: repo.forks,
            language: repo.language || "Other",
            html_url: repo.html_url,
          }))
        );
      } catch (error) {
        console.error("GitHub API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section id="github" className="py-20">
      <div className="container mx-auto max-w-6xl px-8">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          GitHub Contributions
        </h2>

        {/* Contribution Calendar */}
        <div className="mb-12 flex flex-col items-center">
          <div className="w-full p-6 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg overflow-x-auto">
            <GitHubCalendar
              username={GITHUB_USERNAME}
              blockSize={14.6}
              blockMargin={5}
              colorScheme="light"
              theme={{
                light: [
                  "#afb8c2",
                  "#60a5fa",
                  "#1a53e6",
                  "#1c3dff",
                  "#1c3dff",
                ],
              }}
            />
          </div>

          <p className="mt-8 text-lg text-center text-gray-600 dark:text-gray-300 max-w-5xl">
            My GitHub activity reflects my work across personal projects,
            web development, and continuous learning. Explore my public
            repositories to see the projects and technologies I've worked with.
          </p>
        </div>

        {/* Public Repositories */}
        {loading ? (
          <p className="text-center text-gray-500">
            Loading repositories...
          </p>
        ) : repos.length > 0 ? (
          <>
            <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-6">
              Recent Public Projects
            </h3>

            <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
              {repos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    {repo.name}
                  </h3>

                  <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-3">
                    {repo.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-gray-500 dark:text-gray-400">
                    <span>{repo.language}</span>

                    <div className="flex space-x-4">
                      <span>⭐ {repo.stars}</span>
                      <span>🍴 {repo.forks}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">
            Unable to load public repositories.
          </p>
        )}

        {/* View All GitHub Repositories */}
        <div className="flex justify-center mb-12">
          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:scale-105 transition-transform duration-300"
          >
            <Github className="w-5 h-5" />
            View All Public Repositories
          </a>
        </div>

        {/* GitHub Profile */}
        {user && (
          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-6 shadow-lg">

            <div className="flex items-center space-x-4">
              <img
                src={user.avatar_url}
                alt="Kameshwar Patel GitHub profile"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-blue-600"
              />

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {user.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  @{user.login}
                </p>
              </div>
            </div>

            <p className="hidden md:block text-gray-700 dark:text-gray-300 flex-1 text-center md:text-left mx-6">
              {user.bio}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-gray-600 dark:text-gray-400 mt-4 md:mt-0">

              <span className="text-sm">
                👥 {user.followers} Followers
              </span>

              <span className="text-sm">
                📦 {user.public_repos} Public Repos
              </span>

              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto text-center flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all"
              >
                <Github className="w-5 h-5" />
                View Profile
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}