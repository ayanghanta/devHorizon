import Back from '../../ui/Back';
import Button from '../../ui/buttons/Button';

function AddNewAdmin() {
  return (
    <div className="mx-auto mt-20 max-w-4xl">
      <Back />
      <h1 className="mb-16 text-center font-header text-xl font-semibold text-gray-700">
        Create New Admin Account
      </h1>
      <form className="mx-auto flex w-3/4 flex-col gap-6">
        <input
          type="text"
          name="text"
          placeholder="Full name"
          required
          className="bg-gray-50 px-3 py-2"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="bg-gray-50 px-3 py-2"
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
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
          Create
        </Button>
      </form>
    </div>
  );
}

export default AddNewAdmin;
