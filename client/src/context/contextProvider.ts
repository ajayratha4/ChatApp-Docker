import React from "react";

export enum ActionKind {
  SETTHEMECOLOR = "SETTHEMECOLOR",
  SETUSERS = "SETUSERS",
  SETSELECTEDUSER = "SETSELECTEDUSER",
  SETUSERSMESSAGE = "SETUSERSMESSAGE",
}

export interface Action {
  type: ActionKind;
  payload: any;
}

export interface User {
  userId: number;
  userName: string;
  socketId: string;
  message: string;
}
interface InitialValue {
  isDark: boolean;
  user: User[] | [];
  selectedUser: number | null;
}
export const initialValue = {
  isDark: false,
  user: [],
  selectedUser: null,
};
export const reducer = (state: InitialValue, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionKind.SETTHEMECOLOR:
      return {
        ...state,
        isDark: payload,
      };

    case ActionKind.SETUSERS:
      return {
        ...state,
        user: payload,
      };

    case ActionKind.SETSELECTEDUSER:
      return {
        ...state,
        selectedUser: payload,
      };
    case ActionKind.SETUSERSMESSAGE:
      const newUser = { ...state.user };
      newUser[payload.id] = {
        ...newUser[payload.id],
        message: payload.message,
      };

      return {
        ...state,
        user: newUser,
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
