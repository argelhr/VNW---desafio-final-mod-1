import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import routes from "./routes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Header />}>
          <Route path={routes.donate_books} element={<h1>Livros doados</h1>} />
          <Route path={routes.donate} element={<h1>Quero doar</h1>} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
