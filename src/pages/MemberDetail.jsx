import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function MemberDetail({ members }) {
  const { id } = useParams();
  const member = members.find((m) => m.id === Number(id));

  useEffect(() => {
    document.title = member ? `${member.name} | Team Directory` : "Not found";
  }, [member]);

  if (!member) return <p>Member not found.</p>;

  return (
    <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
      <h1 className="text-2xl font-bold">{member.name}</h1>
      <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
      <p className="mt-2">{member.email}</p>
      <Link to="/" className="mt-4 inline-block text-blue-500 hover:underline">
        ← Back
      </Link>
    </div>
  );
}