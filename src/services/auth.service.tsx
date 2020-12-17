/** Header configuration to SignIn */
const headers = new Headers();
headers.append('Content-Type', 'application/json');

export const signIn = async (
  email: string,
  password: string,
): Promise<string> => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers,
  };

  const res = await fetch(`${process.env.GALAXY_MEETING_API}/auth`, options);

  if (res.ok) {
    const data = await res.json();
    return data.token;
  }
  throw new Error('email or password invalid');
};
