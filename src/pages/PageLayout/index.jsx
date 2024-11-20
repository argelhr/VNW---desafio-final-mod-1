import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>footer</footer>
    </>
  );
};

export default Layout;
