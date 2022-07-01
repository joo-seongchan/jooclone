import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./component/header/Header";
import { About } from "./component/pages/detail/about/About";
import { Home } from "./component/pages/home/Home";
import { NotFound } from "./component/pages/NotFound";
import { GlobalStyle } from "./style/GlobalStyle";

export const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
};
