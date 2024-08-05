import User from '../models/User';

export interface IUser {
  id?: number;
  name: string;
  email: string;
  created_at?: Date;
  updated_at?: Date;
}

export const getUserById = async (id: number): Promise<IUser | undefined> => {
  return User.query().where({ id }).first();
};

export const getAllUsers = async (): Promise<IUser[]> => {
  return User.query().select();
};

export const createUser = async (user: Omit<IUser, 'id' | 'created_at' | 'updated_at'>): Promise<IUser> => {
  const newUser = await User.query().insert(user).returning('id');
  return newUser;
};



