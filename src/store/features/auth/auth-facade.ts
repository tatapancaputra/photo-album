import { RootState, useAppDispatch, useAppSelector } from '@store/config';
import { FEATURE_NAME, actions } from './auth-slice';

export default function AuthFacade() {
  const dispatch = useAppDispatch();
  const { authState, username } = useAppSelector(
    (state: RootState) => state[FEATURE_NAME]
  );

  return {
    authState,
    username,

    setAuthState: (val: boolean) => dispatch(actions.setAuthState(val)),
    toggleAuthState: () => dispatch(actions.setAuthState(!authState)),
  };
}
