import React from "react";

export enum ActionKind {
  SETTHEMECOLOR = "SETTHEMECOLOR",
  SETCUSER = "SETCUSER",
}

export interface Action {
  type: ActionKind;
  payload: any;
}

export interface User {
  id: number;
  userName: string;
}
interface InitialValue {
  isDark: boolean;
  user: User | null;
}
export const initialValue = {
  isDark: false,
  user: null,
};
export const reducer = (state: InitialValue, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionKind.SETTHEMECOLOR:
      return {
        ...state,
        isDark: payload,
      };

    case ActionKind.SETCUSER:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};

interface ContextType {
  state: InitialValue;
  dispatch: React.Dispatch<any>;
}

export const ContextProvider = React.createContext<ContextType>({
  state: initialValue,
  dispatch: () => null,
});
