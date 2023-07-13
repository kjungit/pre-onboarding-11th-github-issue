import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/Router";
import IssueProvider from "./contexts/issueContext";

function App() {
  return (
    <IssueProvider>
      <RouterProvider router={router} />
    </IssueProvider>
  );
}

export default App;
