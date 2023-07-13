import { IIssueItemProps } from "../apis/services/issues";

export interface IIssuesState {
  loading: boolean;
  data: any;
  error: any;
}

export type IIssuesAction =
  | { type: "LOADING" }
  | { type: "SUCCESS"; data: any }
  | { type: "ERROR"; error: any };

export function detailIssuesReducer(
  state: IIssuesState,
  action: IIssuesAction
) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data as IIssueItemProps,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        error: action.error,
      };
    default:
      throw new Error(`처리되지 않은 타입입니다. `);
  }
}
