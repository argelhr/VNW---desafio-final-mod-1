import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLayout from "../pages/PageLayout";
import routes from "./routes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<PageLayout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path={routes.donate_books} element={<h1>Livros doados</h1>} />
          <Route path={routes.donate} element={<h1>Quero doar</h1>} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
