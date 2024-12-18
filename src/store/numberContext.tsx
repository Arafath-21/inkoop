import React, { createContext, ReactNode, useContext, useReducer } from 'react';

// Define the context state interface
interface NumberState {
  message: string;
  numbers: number[];
}

// Define the actions
interface SetPositiveAction {
  type: 'SET_POSITIVE';
  payload: { numbers: number[] };
}

interface SetNegativeAction {
  type: 'SET_NEGATIVE';
}

type NumberAction = SetPositiveAction | SetNegativeAction;

// Define the context type
interface NumberContextType {
  state: NumberState;
  setPositive: (numbers: number[]) => void;
  setNegative: () => void;
}

// Create the context
const NumberContext = createContext<NumberContextType | undefined>(undefined);

// Initial state
const initialState: NumberState = {
  message: '',
  numbers: [],
};

// Reducer function
const reducer = (state: NumberState, action: NumberAction): NumberState => {
  switch (action.type) {
    case 'SET_POSITIVE':
      return {
        message: '',
        numbers: action.payload.numbers,
      };
    case 'SET_NEGATIVE':
      return {
        message: 'Enter a positive value',
        numbers: [],
      };
    default:
      return state;
  }
};

// Provider component
interface NumberProviderProps {
  children: ReactNode;
}

export const NumberProvider: React.FC<NumberProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setPositive = (numbers: number[]) => {
    dispatch({ type: 'SET_POSITIVE', payload: { numbers } });
  };

  const setNegative = () => {
    dispatch({ type: 'SET_NEGATIVE' });
  };
  const ctxValue = { state, setPositive, setNegative };
  return (
    <NumberContext.Provider value={ctxValue}>{children}</NumberContext.Provider>
  );
};

// Custom hook to use the NumberContext
export const useNumberContext = (): NumberContextType => {
  const context = useContext(NumberContext);
  if (!context) {
    throw new Error('useNumberContext must be used within a NumberProvider');
  }
  return context;
};
