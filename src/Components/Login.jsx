import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom'

import { Helmet } from 'react-helmet';


const Login = () => {
    // We can access the value of input field in 3-4 way
    // 1. using the name of the field
    // 2. using useState and onChange event handler
    // 3. using useRef

    // method 2
    const [email2, setEmail2] = useState('');
    const [password2, setPassword2] = useState('');
    function handleEmailChange(event) {
        setEmail2(event.target.value);
    }
    function handlePasswordChange(event) {
        setPassword2(event.target.value);
    }

    // method 3
    const emailRef = useRef('');
    const passwordRef = useRef('');


    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        // method 1
        const email1 = event.target.email.value;
        const password1 = event.target.password.value;
        const checked1 = event.target.checkbox.checked;

        // method 2
        // we can now access the value through email2, password2

        // method 3
        const email3 = emailRef.current.value;
        const password3 = passwordRef.current.value;

        console.log(email1, email2, email3);
        console.log(password1, password2, password3);

        if (email1 === 'abtjoy15@gmail.com' && password1 === '1234' && checked1) {
            navigate('/profile');
        }
        else {
            alert('Something missing!');
        }
    }

    return (
        <div className=" max-w-[400px] mx-auto border border-gray-400 rounded-t-md mt-20 ">
            <Helmet>
                <title>Codeforces | Login</title>
            </Helmet>

            <h3 className="text-[20px] text-[#3B5998] font-semibold border-b border-gray-400 px-2 ">Login into Codeforces</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 my-5 px-2  ">
                <div>
                    <p>Handle/Email</p>
                    <input type="email" name="email" onChange={handleEmailChange} ref={emailRef} id="" className="border border-gray-500 bg-[#E8F0FE] rounded-sm px-1 " />
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" name="password" onChange={handlePasswordChange} ref={passwordRef} id="" className="border border-gray-500 bg-[#E8F0FE] rounded-sm px-1 " />
                </div>
                <div className=" flex gap-1 ">
                    <input type="checkbox" name="checkbox" id="" />
                    <p className=" text-[11px] ">Remember me for a month</p>
                </div>
                <div>
                    <button className=" btn h-[30px] bg-[#F5F5F5] border border-gray-500  ">Login</button>
                    <p className=" text-[11px] text-blue-700 font-semibold underline text-end">Forgot your password?</p>
                </div>
            </form>

            <p className="text-[11px] text-end underline bg-[#F5F5F5] text-blue-700 font-semibold border-t border-gray-400 px-2">Use Gmail</p>
        </div>
    );
};

export default Login;