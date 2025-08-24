import Header from "./Header";
import {Outlet} from 'react-router-dom';
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div className=" max-w-[1280px] mx-auto ">
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;