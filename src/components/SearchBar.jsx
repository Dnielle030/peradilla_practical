export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by name or role..."
      className="w-full rounded border p-3 dark:border-gray-600 dark:bg-gray-800"
    />
  );
}