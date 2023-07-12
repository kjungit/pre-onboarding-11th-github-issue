import { axiosInstancex } from "../axios";

interface IIssueResponseProps {
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
      "repos/facebook/react/issues"
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
