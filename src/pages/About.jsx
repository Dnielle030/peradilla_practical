import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About Me | Team Directory";
  }, []);

  return (
    <div className="rounded-lg bg-white p-8 shadow dark:bg-gray-800">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="mt-4">Hi, I'm <strong>Your Full Name</strong>.</p>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        Write a short intro here: your course or year level, your interests, and what
        you learned building this app with React, Vite, Tailwind CSS, and React Router.
      </p>
      <h2 className="mt-6 text-xl font-semibold">Tech used</h2>
      <ul className="mt-2 list-inside list-disc">
        <li>React + Vite</li>
        <li>Tailwind CSS</li>
        <li>React Router</li>
        <li>useState and useEffect</li>
      </ul>
    </div>
  );
}