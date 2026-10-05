import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 Not Found | Team Directory";
  }, []);

  return (
    <div className="rounded-lg bg-white p-10 text-center shadow dark:bg-gray-800">
      <h1 className="text-6xl font-bold text-blue-500">404</h1>
      <p className="mt-4 text-xl font-semibold">Page Not Found</p>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        The page you're looking for doesn't exist or was moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded bg-blue-500 px-5 py-2 text-white hover:bg-blue-600"
      >
        Go back Home
      </Link>
    </div>
  );
}