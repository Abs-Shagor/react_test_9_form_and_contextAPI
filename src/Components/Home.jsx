import Header from "./Header";
import {Outlet} from 'react-router-dom';
import Navbar from "./Navbar";
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div className=" max-w-[1280px] mx-auto ">
            <Helmet>
                <title>Codeforces | Home</title>
            </Helmet>

            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;