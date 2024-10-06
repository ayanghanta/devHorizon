function Button({ children }) {
  return (
    <button className="rounded-lg bg-gray-800 px-2 py-1 text-sm font-semibold text-gray-100 sm:px-4 sm:py-2 sm:text-base">
      {children}
    </button>
  );
}

export default Button;
