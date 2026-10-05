import React from "react";
import { useBlogs } from "../hooks/useBlogs";
import { BlogCard } from "./ui/BlogCard";
import { SectionTitle } from "./ui/SectionTitle";

export function Blogs() {
  const { blogs, loading } = useBlogs();

  return (
    <section id="blogs" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Latest Blogs</SectionTitle>

        {loading ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Loading blogs...
          </p>
        ) : blogs.length > 0 ? (
          <>
            <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <BlogCard key={blog.slug} {...blog} />
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href="https://patelkameshwar.hashnode.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                View More Articles →
              </a>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No articles available at the moment.
          </p>
        )}
      </div>
    </section>
  );
}