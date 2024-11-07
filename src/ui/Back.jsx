import { useNavigate } from 'react-router-dom';

function Back() {
  const navigator = useNavigate();
  return (
    <span
      onClick={() => navigator(-1)}
      className="inline-block cursor-pointer rounded-sm bg-gray-50 px-2 py-1 text-gray-500"
    >
      &larr;Bake
    </span>
  );
}

export default Back;
