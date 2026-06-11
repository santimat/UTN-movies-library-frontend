export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'USER';
};

export type AuthRequest = {
  name: string;
  email: string;
  password: string;
  remember: boolean;
};

export type UserResponse = Omit<User, 'password'>;
