import { RootState, useAppDispatch, useAppSelector } from '@store/config';
import { FEATURE_NAME, actions } from './counter-slice';

export default function CounterFacade() {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state: RootState) => state[FEATURE_NAME]);

  return {
    value,

    increaseValue: () => dispatch(actions.increment()),
    decreaseValue: () => dispatch(actions.decrement()),
    increaseValueByAmount: (amount: number) =>
      dispatch(actions.incrementByAmount(amount)),
  };
}
