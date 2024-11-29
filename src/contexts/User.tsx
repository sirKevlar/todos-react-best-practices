import { createContext } from 'react';
import { User } from '../lib/types/types';

export const UserContext = createContext<User | null>(null);