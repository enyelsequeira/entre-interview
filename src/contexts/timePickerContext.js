/* eslint-disable comma-dangle */
import {
  createContext, useContext, useMemo, useReducer
} from 'react';

const initialState = {
  startHour: 0,
  endHour: 0,
  startMinute: 0,
  endMinute: 0,

};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_START_HOUR':
      return { ...state, startHour: state.startHour + 1 };
    case 'INCREMENT_END_HOUR':
      return { ...state, endHour: state.endHour + 1 };
    case 'INCREMENT_START_MINUTE':
      return { ...state, startMinute: state.startMinute + 1 };
    case 'INCREMENT_END_MINUTE':
      return { ...state, endMinute: state.endMinute + 1 };
    case 'DECREMENT_START_HOUR':
      return { ...state, startHour: state.startHour - 1 };
    case 'DECREMENT_END_HOUR':
      return { ...state, endHour: state.endHour - 1 };
    case 'DECREMENT_START_MINUTE':
      return { ...state, startMinute: state.startMinute - 1 };
    case 'DECREMENT_END_MINUTE':
      return { ...state, endMinute: state.endMinute - 1 };
    default:
      throw Error('unknown action');
  }
};

const TimeContext = createContext(null);

const checkLimit = (limit, checkValue) => {
  console.log('checkValue', checkValue);
  console.log('limit', limit);

  return checkValue < 0 || checkValue <= limit - 1;
};

const TimeProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementStartHour = () => {
    const valid = checkLimit(12, state.startHour);

    if (valid) dispatch({ type: 'INCREMENT_START_HOUR' });
  };
  const incrementEndHour = () => {
    if (checkLimit(12, state.endHour)) dispatch({ type: 'INCREMENT_END_HOUR' });
  };
  const incrementStartMinute = () => dispatch({ type: 'INCREMENT_START_MINUTE' });
  const incrementEndMinute = () => dispatch({ type: 'INCREMENT_END_MINUTE' });
  const decrementStartHour = () => {
    const valid = checkLimit(12, state.startHour);

    if (valid) dispatch({ type: 'DECREMENT_START_HOUR' });
  };
  const decrementEndHour = () => dispatch({ type: 'DECREMENT_END_HOUR' });
  const decrementStartMinute = () => dispatch({ type: 'DECREMENT_START_MINUTE' });
  const decrementEndMinute = () => dispatch({ type: 'DECREMENT_END_MINUTE' });

  const providerValue = useMemo(() => ({
    ...state,
    incrementStartHour,
    incrementEndMinute,
    incrementStartMinute,
    incrementEndHour,
    decrementEndHour,
    decrementEndMinute,
    decrementStartHour,
    decrementStartMinute,
  }), [state]);

  return <TimeContext.Provider value={providerValue} {...props} />;
};

export const useTimeContext = () => useContext(TimeContext);

export default TimeProvider;
