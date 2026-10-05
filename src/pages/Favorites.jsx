import { useEffect } from "react";
import MemberCard from "../components/MemberCard";

export default function Favorites({ members, favorites, toggleFavorite }) {
  useEffect(() => {
    document.title = `Favorites (${favorites.length}) | Team Directory`;
  }, [favorites]);

  const favMembers = members.filter((m) => favorites.includes(m.id));

  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">Favorites</h1>
      {favMembers.length === 0 && <p>No favorites yet.</p>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {favMembers.map((m) => (
          <MemberCard key={m.id} member={m} isFavorite onToggleFavorite={toggleFavorite} />
        ))}
      </div>
    </>
  );
}