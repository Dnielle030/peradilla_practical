export default function ErrorMessage({ title = "Something went wrong", message, children }) {
  return (
    <div className="rounded-lg border border-red-300 bg-red-50 p-6 text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300">
      <h2 className="text-lg font-semibold">{title}</h2>
      {message && <p className="mt-1">{message}</p>}
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}