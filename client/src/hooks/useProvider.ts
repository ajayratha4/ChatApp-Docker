import { ContextProvider } from "context/contextProvider";
import { useContext } from "react";

const useProvider = () => {
  const { state, dispatch } = useContext(ContextProvider);

  return { ...state, dispatch };
};

export default useProvider;
