const BASE_URL = `http://localhost:3000/api/v1/users`;

export async function updateMe({ name, email }) {
  const res = await fetch(`${BASE_URL}/updateMe`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ name, email }),
  });
  const data = await res.json();
  if (!data.ok) throw new Error(data.message);

  return data.data;
}
export async function updatePassword({
  password,
  confirmPassword,
  currentPassword,
}) {
  const res = await fetch(`${BASE_URL}/updatePassword`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ password, confirmPassword, currentPassword }),
  });
  const data = await res.json();
  if (!data.ok) throw new Error(data.message);

  return data.data;
}
