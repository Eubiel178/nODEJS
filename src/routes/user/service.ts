import * as repository from "./repository";

export async function register(data: {
  name: string;
  email: string;
  date_birth?: string;
}) {
  return repository.createUser(data.name, data.email, data.date_birth);
}

export async function authenticate(email: string) {
  const result = await repository.findUserByEmail(email);

  return result.rows[0];
}
