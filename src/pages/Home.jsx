import { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MemberCard from "../components/MemberCard";

export default function Home({ members, search, setSearch, favorites, toggleFavorite }) {
  useEffect(() => {
    document.title = "Team Directory";
  }, []);

  const q = search.toLowerCase();
  const filtered = members.filter(
    (m) => m.name.toLowerCase().includes(q) || m.role.toLowerCase().includes(q)
  );

  return (
    <>
      <SearchBar value={search} onChange={setSearch} />
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