import { WebStorage } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage: () => WebStorage = () => {
  return {
    getItem: (_key: string) => Promise.resolve(null),
    setItem: (_key: string, _item: string) => Promise.resolve(),
    removeItem: (_key: string) => Promise.resolve(),
  };
};

export const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();
