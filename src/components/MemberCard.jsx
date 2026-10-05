import { Link } from "react-router-dom";
import Button from "./Button";

export default function MemberCard({ member, isFavorite, onToggleFavorite }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
      <h2 className="text-lg font-semibold">{member.name}</h2>
      <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{member.company}</p>
      <div className="mt-4 flex items-center justify-between">
        <Link to={`/member/${member.id}`} className="text-blue-500 hover:underline">
          View details
        </Link>
        <Button
          variant="star"
          onClick={() => onToggleFavorite(member.id)}
          className="px-1 py-0"
          aria-label="Toggle favorite"
        >
          {isFavorite ? "★" : "☆"}
        </Button>
      </div>
    </div>
  );
}