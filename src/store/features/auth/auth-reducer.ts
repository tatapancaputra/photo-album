import { storage } from '@store/persist-storage';
import { PersistConfig, persistReducer } from 'redux-persist';
import { FEATURE_NAME, State, reducer } from './auth-slice';

export const config: PersistConfig<State> = {
  // `version` is used when there is a change in our State (eg: a new key is introduced).
  // so we need to tell the local storage how to sync in order to catch up with the newly introduced key through `migrate`.
  // https://www.freecodecamp.org/news/how-to-use-redux-persist-when-migrating-your-states-a5dee16b5ead/
  // version: 0, // the default value is -1

  storage,
  key: FEATURE_NAME,

  // when both blacklist & whitelist are not defined, then ALL states will be saved to local storage
  // blacklist: ['username'], // states that will NOT be saved to local storage
  whitelist: ['authState'], // states that will be saved to local storage; NOTHING will be saved when it is EMPTY
};

export const AUTH_REDUCER = FEATURE_NAME;

export const authReducer = persistReducer(config, reducer);
