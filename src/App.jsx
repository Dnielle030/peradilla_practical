import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { team } from "./data/team";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Users from "./pages/Users";
import MemberDetail from "./pages/MemberDetail";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setMembers(team);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // apply dark mode class
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleFavorite = (id) =>
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Navbar
        darkMode={darkMode}
        onToggleDark={() => setDarkMode((d) => !d)}
        favoriteCount={favorites.length}
      />
      <main className="mx-auto max-w-5xl p-6">
        <Routes>
          <Route path="/" element={<Home memberCount={members.length} />} />
          <Route
            path="/users"
            element={
              <Users
                members={members}
                search={search}
                setSearch={setSearch}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/member/:id"
            element={
              <MemberDetail
                members={members}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}