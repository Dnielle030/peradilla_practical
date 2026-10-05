import { useState, useEffect } from "react";
import MemberCard from "../components/MemberCard";
import ErrorMessage from "../components/ErrorMessage";
import Button from "../components/Button";

export default function Users({ members, search, setSearch, favorites, toggleFavorite }) {
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  useEffect(() => {
    document.title = "Users | Team Directory";
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
      <h1 className="text-3xl font-bold">Users</h1>
      <p className="mb-6 mt-1 text-gray-500 dark:text-gray-400">
        Browse, search, and favorite the {members.length} people on the team.
      </p>

      <div className="flex items-center gap-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, role, or company..."
          className="w-full rounded border p-3 dark:border-gray-600 dark:bg-gray-800"
        />
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

      {filtered.length === 0 && (
        <div className="mt-6">
          <ErrorMessage title="No members found" message="Try a different search or filter.">
            <Button
              variant="secondary"
              onClick={() => {
                setSearch("");
                setFavoritesOnly(false);
              }}
            >
              Clear filters
            </Button>
          </ErrorMessage>
        </div>
      )}
    </>
  );
}