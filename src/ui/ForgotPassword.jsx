import { useState } from 'react';
import Button from './buttons/Button';
import { useMutation } from '@tanstack/react-query';
import { forgotPassword as forgotPasswordAPI } from '../services/authServices';
import toast from 'react-hot-toast';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const { mutate: getToken, isLoading: isSendingToken } = useMutation({
    mutationFn: () => forgotPasswordAPI(email),
    onSuccess: (data) => {
      toast.success(data.message);
      setEmail('');
    },
    onError: (err) => toast.error(err.message),
  });

  function handleSubmit(e) {
    e.preventDefault();
    getToken(email);
  }

  return (
    <div className="mx-auto mt-20 max-w-4xl">
      <h1 className="mb-24 text-center font-header text-xl font-semibold text-gray-700">
        Forgot Password? Request a Verification Token
      </h1>

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
        <Button role="submit" type="primary" disabled={isSendingToken}>
          {isSendingToken ? 'Seding Token... ' : 'Get Reset Token'}
        </Button>
      </form>
    </div>
  );
}

export default ForgotPassword;
