export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  ...props
}) {
  const styles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
    star: "bg-transparent text-2xl text-yellow-500",
  };

  return (
    <button
      onClick={onClick}
      className={`rounded px-4 py-2 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}