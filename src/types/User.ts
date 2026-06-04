export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'USER';
};

export type LogInUser = Omit<User, 'id' | 'name' | 'role'> & {
  rememberMe: boolean;
};

export type RegisterUser = Omit<User, 'id' | 'role'>;

export type UserResponse = Omit<User, 'password'>;
