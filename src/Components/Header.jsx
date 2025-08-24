import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className=" flex justify-between items-center ">
            <div>
                <img className=" w-[300px] " src="https://codeforces.org/s/55745/images/codeforces-sponsored-by-ton.png" alt="" />
            </div>
            <div>
                <div className="flex gap-1 justify-end ">
                    <img src="https://codeforces.org/s/55745/images/flags/24/gb.png" alt="" />
                    <img src="https://codeforces.org/s/55745/images/flags/24/ru.png" alt="" />
                </div>
                <div className=" flex gap-1 justify-end ">
                    <NavLink to={`/login`} className={`underline`} >Enter</NavLink>
                    <p>|</p>
                    <NavLink to={`/register`} className={`underline`} >Register</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;