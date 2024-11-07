import { useState } from 'react';
import Button from './buttons/Button';

import { Link } from 'react-router-dom';
import { useLogin } from '../admin/manageAdmin/useLogin';
import ButtonLoader from './ButtonLoader';

function Login() {
  const [email, setEmail] = useState('test7@gmail.com');
  const [password, setPassword] = useState('test123456789');
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      },
    );
  }

  return (
    <div className="mx-auto mt-20 max-w-4xl">
      <h1 className="mb-16 text-center font-header text-xl font-semibold text-gray-700">
        Admins Only: Please Enter Credentials to Continue
      </h1>
      <div>
        <form
          className="mx-auto flex w-3/4 flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            required
            className="bg-gray-50 px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Enter password"
            className="bg-gray-50 px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button role="submit" type="primary" disabled={isLoading}>
            {isLoading ? <ButtonLoader /> : 'Login'}
          </Button>
          <p className="cursor-pointer text-right text-sm text-gray-500 hover:text-gray-600 hover:underline">
            <Link to="/forgotpassword">Forgot password ?</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
