import { useForm } from 'react-hook-form';
import Back from '../../ui/Back';
import Button from '../../ui/buttons/Button';
import ErrorText from '../../ui/ErrorText';
import { useSingup } from './useSingup';
import ButtonLoader from '../../ui/ButtonLoader';

// Email regex: /\S+@\S+\.\S+/

function AddNewAdmin() {
  const { register, formState, handleSubmit, getValues } = useForm();
  const { errors } = formState;
  const { singup, isLoading } = useSingup();

  function onSubmit(data) {
    // console.log(data);
    singup({ ...data });
  }

  return (
    <div className="mx-auto mt-20 max-w-4xl">
      <Back />
      <h1 className="mb-16 text-center font-header text-xl font-semibold text-gray-700">
        Create New Admin Account
      </h1>
      <form
        className="mx-auto flex w-3/4 flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Full name"
            required
            className="bg-gray-50 px-3 py-2"
            {...register('name', {
              required: 'This field is required',
            })}
          />
          <ErrorText error={errors?.name?.message} />
        </div>

        <div className="flex flex-col">
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="bg-gray-50 px-3 py-2"
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Enter a valid email',
              },
            })}
          />
          <ErrorText error={errors?.email?.message} />
        </div>

        <div className="flex flex-col">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="bg-gray-50 px-3 py-2"
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 12,
                message: 'Password must be atleast 12 charcter long',
              },
            })}
          />
          <ErrorText error={errors?.password?.message} />
        </div>

        <div className="flex flex-col">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            required
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

        <Button role="submit" type="primary" disabled={isLoading}>
          {isLoading ? <ButtonLoader /> : 'Create new Admin'}
        </Button>
      </form>
    </div>
  );
}

export default AddNewAdmin;
