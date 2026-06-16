export interface CreateUserDTO {
  name: string;
  email: string;
  date_birth?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  da