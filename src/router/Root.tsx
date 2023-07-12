import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

export function Root() {
  return (
    <>
      <Header />
      <main css={{ paddingTop: "120px" }}>
        <Outlet />
      </main>
    </>
  );
}
