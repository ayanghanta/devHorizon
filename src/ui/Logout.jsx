import { useLogout } from '../admin/manageAdmin/useLogout';
import Button from './buttons/Button';
import { PiSignOut } from 'react-icons/pi';

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <Button type="secondary" onClick={logout} disabled={isLoading}>
      <PiSignOut className="text-lg" />
    </Button>
  );
}

export default Logout;
