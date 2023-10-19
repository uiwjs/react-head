import React, { type FC, type PropsWithChildren, createContext, useContext, useReducer } from 'react';

type InitialState = {
  title?: string;
};

const initialState: InitialState = {};
export const Context = createContext(initialState);
export const useStore = () => {
  return useContext(Context);
};

type Dispatch = React.Dispatch<InitialState>;
const DispatchHead = createContext<Dispatch>(() => {});
DispatchHead.displayName = 'Head.Dispatch';

export function useDispatch() {
  return useContext(DispatchHead);
}

const reducer = (state: InitialState, action: InitialState) => ({
  ...state,
  ...action,
});

type HeadProps = {
  initial?: InitialState;
};

export const Head: FC<PropsWithChildren<HeadProps>> = ({ children, initial }) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState, ...initial });
  return (
    <Context.Provider value={state}>
      <DispatchHead.Provider value={dispatch}>{children}</DispatchHead.Provider>
    </Context.Provider>
  );
};

Head.displayName = 'Head.Provider';
