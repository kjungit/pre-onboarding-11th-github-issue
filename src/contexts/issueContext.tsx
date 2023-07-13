import { ReactNode, createContext, useReducer } from "react";
import { IIssueResponseProps } from "../apis/services/issues";
import {
  IIssuesAction,
  IIssuesState,
  issuesReducer,
} from "../reducers/issuesReducer";

interface IIssuesContextProps {
  state: IIssuesState;
  dispatch: React.Dispatch<IIssuesAction>;
}

export const IssueContext = createContext<IIssuesContextProps | null>(null);

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export function IssueProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(issuesReducer, initialState);

  return (
    <IssueContext.Provider value={{ state, dispatch }}>
      {children}
    </IssueContext.Provider>
  );
}

export default IssueProvider;
