import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MemberCard from "../components/MemberCard";

export default function Team({ members, search, setSearch, favorites, toggleFavorite }) {
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  useEffect(() => {
    document.title = "Team | Team Directory";
  }, []);

  const q = search.toLowerCase();
  const filtered = members.filter((m) => {
    const matches =
      m.name.toLowerCase().includes(q) ||
      m.role.toLowerCase().includes(q) ||
      m.company.toLowerCase().includes(q);
    return matches && (!favoritesOnly || favorites.includes(m.id));
  });

  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">Team</h1>
      <div className="flex items-center gap-4">
        <SearchBar value={search} onChange={setSearch} />
        <label className="flex items-center gap-2 whitespace-nowrap">
          <input
            type="checkbox"
            checked={favoritesOnly}
            onChange={(e) => setFavoritesOnly(e.target.checked)}
          />
          Favorites only
        </label>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((m) => (
          <MemberCard
            key={m.id}
            member={m}
            isFavorite={favorites.includes(m.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
      {filtered.length === 0 && <p className="mt-6">No members found.</p>}
    </>
  );
}