import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function Navbar({ darkMode, onToggleDark, favoriteCount }) {
  const link = ({ isActive }) =>
    isActive ? "font-bold text-blue-500" : "hover:text-blue-500";

  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow dark:bg-gray-800">
      <div className="flex items-center gap-6">
        <NavLink to="/" end className={link}>Home</NavLink>
        <NavLink to="/users" className={link}>Users</NavLink>
        <NavLink to="/about" className={link}>About</NavLink>
        <span className="text-sm text-yellow-500">★ {favoriteCount}</span>
      </div>
      <Button variant="secondary" onClick={onToggleDark} className="py-1">
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </Button>
    </nav>
  );
}