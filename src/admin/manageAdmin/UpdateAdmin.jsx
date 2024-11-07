import Button from '../../ui/buttons/Button';
import Back from '../../ui/Back';

function UpdateAdmin() {
  return (
    <div className="mx-auto mt-20 max-w-4xl">
      <Back />
      <h1 className="mb-16 text-center font-header text-xl font-semibold text-gray-700">
        Manage Admin Account Details
      </h1>
      <form className="mx-auto flex w-3/4 flex-col gap-6">
        <input
          type="text"
          name="text"
          placeholder="name"
          required
          className="bg-gray-50 px-3 py-2"
          defaultValue={'Ayan Ghanta'}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="email"
          className="bg-gray-50 px-3 py-2"
          defaultValue={'admin@gmail.com'}
        />
        <Button role="submit" type="primary">
          Update
        </Button>
      </form>
      <form className="mx-auto flex w-3/4 flex-col gap-6">
        <h2 className="mb-6 mt-12 text-center font-header text-xl font-semibold text-gray-600">
          Change account password
        </h2>

        <input
          type="text"
          name="currentPassword"
          placeholder="Current password"
          required
          className="bg-gray-50 px-3 py-2"
        />
        <input
          type="text"
          name="password"
          placeholder="New password"
          required
          className="bg-gray-50 px-3 py-2"
        />
        <input
          type="text"
          name="confirmPassword"
          placeholder="Confirm password"
          required
          className="bg-gray-50 px-3 py-2"
        />
        <Button role="submit" type="primary">
          Change password
        </Button>
      </form>
    </div>
  );
}

export default UpdateAdmin;
