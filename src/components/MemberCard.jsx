import { Link } from "react-router-dom";

export default function MemberCard({ member, isFavorite, onToggleFavorite }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
      <h2 className="text-lg font-semibold">{member.name}</h2>
      <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
      <div className="mt-4 flex items-center justify-between">
        <Link to={`/member/${member.id}`} className="text-blue-500 hover:underline">
          View
        </Link>
        <button onClick={() => onToggleFavorite(member.id)} className="text-2xl">
          {isFavorite ? "★" : "☆"}
        </button>
      </div>
    </div>
  );
}