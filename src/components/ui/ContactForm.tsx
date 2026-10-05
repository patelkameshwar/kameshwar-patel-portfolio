import React, { useState } from "react";
import { LuMessageSquareShare } from "react-icons/lu";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    _gotcha: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/mykyvqya", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          message: "",
          _gotcha: "",
        });
      } else {
        const errorData = await response.json();

        setErrorMessage(
          errorData?.error ||
            "Something went wrong. Please try again."
        );

        setStatus("error");
      }
    } catch {
      setErrorMessage(
        "Unable to send your message. Please try again."
      );

      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Honeypot field */}
      <input
        type="text"
        name="_gotcha"
        value={formData._gotcha}
        onChange={handleChange}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-2"
        >
          Name
        </label>

        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete="name"
          placeholder="Enter your name"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2"
        >
          Email
        </label>

        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Enter your message"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        aria-label="Send message"
        className={`w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors ${
          status === "submitting"
            ? "bg-blue-400 cursor-not-allowed text-white"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        {status === "submitting" ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <LuMessageSquareShare className="w-5 h-5" />
          </>
        )}
      </button>

      {/* Success Message */}
      {status === "success" && (
        <p
          role="status"
          aria-live="polite"
          className="text-green-600 text-center mt-4"
        >
          Message sent successfully!
        </p>
      )}

      {/* Error Message */}
      {status === "error" && (
        <p
          role="alert"
          aria-live="assertive"
          className="text-red-600 text-center mt-4"
        >
          {errorMessage}
        </p>
      )}
    </form>
  );
}
