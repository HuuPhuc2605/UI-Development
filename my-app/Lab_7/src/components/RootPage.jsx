import Header from "../router/Header";
import Footer from "../router/Footer";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="flex-grow ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootPage;
