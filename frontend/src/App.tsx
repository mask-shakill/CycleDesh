import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTopArrow from "./components/ScrollToTopArrow";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTopArrow />
    </div>
  );
};

export default App;
