import { useNavigate, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const navogate = useNavigate();
  const error = useRouteError();
  return (
    <div className="mx-auto mt-36 max-w-[500px]">
      <p className="text-center text-3xl text-orange-500">
        Something went worng :/
      </p>
      <p className="mt-4 text-center text-orange-300">
        {error.data || error.message}
      </p>
      <button
        className="mx-auto mt-4 block text-blue-500 transition duration-300 hover:text-blue-700 hover:underline"
        onClick={() => navogate(-1)}
      >
        &larr; Back
      </button>
    </div>
  );
}

export default ErrorPage;
