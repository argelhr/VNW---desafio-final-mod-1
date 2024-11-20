import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import routes from "./routes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Header />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
