import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function MemberDetail({ members, favorites, toggleFavorite }) {
  const { id } = useParams();
  const member = members.find((m) => m.id === Number(id));

  useEffect(() => {
    document.title = member ? `${member.name} | Team Directory` : "Not found | Team Directory";
  }, [member]);

  if (!member) return <p>Member not found.</p>;

  const isFavorite = favorites.includes(member.id);

  return (
    <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">{member.name}</h1>
          <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
        </div>
        <button
          onClick={() => toggleFavorite(member.id)}
          className="text-3xl text-yellow-500"
          aria-label="Toggle favorite"
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </div>
      <dl className="mt-4 space-y-1">
        <div><dt className="inline font-semibold">ID: </dt><dd className="inline">{member.id}</dd></div>
        <div><dt className="inline font-semibold">Company: </dt><dd className="inline">{member.company}</dd></div>
        <div><dt className="inline font-semibold">Email: </dt><dd className="inline">{member.email}</dd></div>
      </dl>
      <Link to="/team" className="mt-6 inline-block text-blue-500 hover:underline">
        ← Back to Team
      </Link>
    </div>
  );
}