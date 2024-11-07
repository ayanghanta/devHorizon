function ErrorText({ error }) {
  if (!error) return null;
  return <p className="ml-2 mt-1 text-sm text-red-400">{error}</p>;
}

export default ErrorText;
