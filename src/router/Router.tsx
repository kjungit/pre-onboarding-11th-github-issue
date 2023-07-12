import { Navigate, createBrowserRouter } from "react-router-dom";
import { Root } from "./Root";
import DetailPage from "../pages/detail";
import ListPage from "../pages/list";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to={`/list`} />,
      },
      {
        path: "/list",
        element: <ListPage />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
      },
    ],
  },
]);
