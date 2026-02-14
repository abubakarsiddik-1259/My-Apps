import { Outlet } from "react-router";
import MyContainer from "../Component/MyContainer";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const MainlayOut = () => {
  return (
    <div className=" ">
      <MyContainer>
        <div className="flex flex-col min-h-screen ">
          <Navbar></Navbar>

          <div className="flex-1   max-w-screen-xl ">
            <Outlet></Outlet>
          </div>

          <Footer></Footer>
        </div>
      </MyContainer>
    </div>
  );
};

export default MainlayOut;
