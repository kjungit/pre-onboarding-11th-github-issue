import { axiosInstancex } from "../axios";

export interface IIssueResponseProps {
  data: IIssueItemProps[];
}
export interface IIssueItemProps {
  id: number;
  title: string;
  body: string;
  comments: number;
  labels: ILabelsProps[];
  number: number;
  created_at: number;
  state: string;
  user: IUserProps;
}

interface IUserProps {
  avatar_url: string;
  login: string;
  html_url: string;
}

interface ILabelsProps {
  id: number;
  name: string;
  color: string;
}

export const getIssues = async () => {
  try {
    const response = await axiosInstancex.get<IIssueResponseProps>(
      "repos/facebook/react/issues",
      {
        params: {
          q: "is:open is:issue",
          sort: "comments-desc",
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getDetailIssues = async ({ id }: { id: number }) => {
  try {
    const response = await axiosInstancex.get<IIssueItemProps>(
      `repos/facebook/react/issues/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
