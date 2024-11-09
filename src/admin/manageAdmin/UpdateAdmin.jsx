import Button from '../../ui/buttons/Button';
import Back from '../../ui/Back';
import { useUser } from './useUser';
import { useState } from 'react';
import { useUpdateUser } from './useUpdateUser';
import ButtonLoader from '../../ui/ButtonLoader';
import { useForm } from 'react-hook-form';
import ErrorText from '../../ui/ErrorText';
import { useUpdatePassword } from './useUpdatePassword';

function UpdateAdmin() {
  const { user } = useUser();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const { register, getValues, handleSubmit, reset, formState } = useForm();

  const { updateMe, isLoading } = useUpdateUser();
  const { updatePassword, isLoading: isUpdatingPassword } = useUpdatePassword();

  const { errors } = formState;

  function updateAccountInfo(e) {
    e.preventDefault();
    if (!name || !email) return;
    if (name === user.name && email === user.email) return;

    updateMe({ name, email });
  }

  function handleUpdatePassword(data) {
    updatePassword(
      { ...data },
      {
        onSuccess: () => reset(),
      },
    );
  }

  return (
    <div className="mx-auto mt-20 max-w-4xl">
      <Back />
      <h1 className="mb-16 text-center font-header text-xl font-semibold text-gray-700">
        Manage Admin Account Details
      </h1>
      <form
        className="mx-auto flex w-3/4 flex-col gap-6"
        onSubmit={updateAccountInfo}
      >
        <input
          type="text"
          name="text"
          placeholder="name"
          required
          disabled={isLoading}
          className="bg-gray-50 px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          required
          disabled={isLoading}
          placeholder="email"
          className="bg-gray-50 px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button role="submit" type="primary">
          {isLoading ? <ButtonLoader /> : 'Update'}
        </Button>
      </form>
      <form
        className="mx-auto flex w-3/4 flex-col gap-6"
        onSubmit={handleSubmit(handleUpdatePassword)}
      >
        <h2 className="mb-6 mt-12 text-center font-header text-xl font-semibold text-gray-600">
          Change account password
        </h2>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Current password"
            disabled={isUpdatingPassword}
            className="bg-gray-50 px-3 py-2"
            {...register('currentPassword', {
              required: 'This field is required',
              minLength: {
                value: 12,
                message: 'Password at least 12 character long',
              },
            })}
          />
          <ErrorText error={errors?.currentPassword?.message} />
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            placeholder="New password"
            disabled={isUpdatingPassword}
            className="bg-gray-50 px-3 py-2"
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 12,
                message: 'Password must be at least 12 character long',
              },
            })}
          />
          <ErrorText error={errors?.password?.message} />
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            disabled={isUpdatingPassword}
            placeholder="Confirm password"
            className="bg-gray-50 px-3 py-2"
            {...register('confirmPassword', {
              required: 'This field is required',
              validate: (value) =>
                value === getValues().password ||
                'Password and password confrim should be same',
            })}
          />
          <ErrorText error={errors?.confirmPassword?.message} />
        </div>

        <Button role="submit" type="primary" disabled={isUpdatingPassword}>
          {isUpdatingPassword ? <ButtonLoader /> : 'Change password'}
        </Button>
      </form>
    </div>
  );
}

export default UpdateAdmin;
