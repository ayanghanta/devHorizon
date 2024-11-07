import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../services/authServices';

export function useUser() {
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  // console.log(data);

  return { isAuthenticated: data?.auth, isLoading, user: data?.user };
}
