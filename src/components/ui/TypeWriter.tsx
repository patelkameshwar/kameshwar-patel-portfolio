import React, { useEffect, useState } from "react";

interface TypeWriterProps {
  words: string[];
  delay?: number;
  infinite?: boolean;
  gradient?: boolean;
}

export function TypeWriter({
  words,
  delay = 100,
  infinite = true,
  gradient = true,
}: TypeWriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const word = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = word.slice(0, currentText.length + 1);
          setCurrentText(nextText);

          if (nextText === word) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          const nextText = word.slice(0, currentText.length - 1);
          setCurrentText(nextText);

          if (nextText === "") {
            setIsDeleting(false);

            if (infinite) {
              setCurrentWordIndex((prev) => (prev + 1) % words.length);
            } else {
              setCurrentWordIndex((prev) =>
                Math.min(prev + 1, words.length - 1)
              );
            }
          }
        }
      },
      isDeleting ? delay / 1.5 : delay
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words, delay, infinite]);

  return (
    <span
      className={`relative font-semibold ${
        gradient
          ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          : "text-blue-600 dark:text-blue-400"
      }`}
    >
      <span className="whitespace-nowrap">
        {currentText}
        <span className="animate-pulse">|</span>
      </span>
    </span>
  );
}