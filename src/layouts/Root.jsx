import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";


const Root = () => {
    return (
        <div className="space-y-10">
            
            <div className="max-w-7xl mx-auto ">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Root;