import { NavLink } from "react-router-dom";

export default function Navbar({ darkMode, onToggleDark, favoriteCount }) {
  const link = ({ isActive }) =>
    isActive ? "font-bold text-blue-500" : "hover:text-blue-500";

  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow dark:bg-gray-800">
      <div className="flex gap-6">
        <NavLink to="/" className={link}>Directory</NavLink>
        <NavLink to="/favorites" className={link}>Favorites ({favoriteCount})</NavLink>
      </div>
      <button
        onClick={onToggleDark}
        className="rounded bg-gray-200 px-3 py-1 dark:bg-gray-700"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}