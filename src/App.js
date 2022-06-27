import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./component/pages/detail/about/About";
import { Home } from "./component/pages/home/Home";
import { NotFound } from "./component/pages/NotFound";

export const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
};
