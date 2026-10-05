import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home({ memberCount }) {
  useEffect(() => {
    document.title = "Home | Team Directory";
  }, []);

  return (
    <div className="rounded-lg bg-white p-10 text-center shadow dark:bg-gray-800">
      <h1 className="text-4xl font-bold">Welcome to the Team Directory</h1>
      <p className="mt-4 text-gray-500 dark:text-gray-400">
        Browse, search, and favorite the {memberCount} people on the team.
      </p>
      <Link
        to="/users"
        className="mt-6 inline-block rounded bg-blue-500 px-5 py-2 text-white hover:bg-blue-600"
      >
        View Users
      </Link>
    </div>
  );
}