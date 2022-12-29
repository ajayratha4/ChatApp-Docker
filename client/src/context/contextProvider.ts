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
}

export interface Message {
  message: string;
  senderId: number;
  receiverId: number;
  time: Date;
}

interface InitialValue {
  isDark: boolean;
  user: User[] | [];
  selectedUser: number | null;
  message: Message[] | [];
}
export const initialValue = {
  isDark: false,
  user: [],
  selectedUser: null,
  message: [],
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
      return {
        ...state,
        message: [...state.message, payload],
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
