import { NavLink } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import './Navbar.css'


const Navbar = () => {
    return (
        <div className='flex justify-between p-3 border border-gray-300 rounded-lg my-5'>
            <div className=' flex gap-5 font-medium'>
                <NavLink to={`/`}>HOME</NavLink>
                <NavLink to={`/top`}>TOP</NavLink>
                <NavLink to={`/catalog`}>CATALOG</NavLink>
                <NavLink to={`/contests`}>CONTESTS</NavLink>    
                <NavLink to={`/gym`}>GYM</NavLink>
                <NavLink to={`/problemset`}>PROBLEMSET</NavLink>
                <NavLink to={`/groups`}>GROUPS</NavLink>
                <NavLink to={`/rating`}>RATING</NavLink>
                <NavLink to={`/edu`}>EDU</NavLink>
                <NavLink to={`/api`}>API</NavLink>
                <NavLink to={`/calender`}>CALENDER</NavLink>
                <NavLink to={`/help`}>HELP</NavLink>
                <NavLink to={`/ryan`}>RAYAN</NavLink>
            </div>
            <div className=" flex items-center border border-gray-300 bg-[#F4F4F4] rounded-sm px-1 ">
                <IoMdSearch />
                <input type="text" className="bg-transparent outline-none w-[100px]" />
            </div>
        </div>
    );
};

export default Navbar;