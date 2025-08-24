import React from 'react';

const ReusableForm = ({formTitle, submitText, checkBoxText, handleSubmit, children}) => {

    // function handleSubmit(event) {
    //     event.preventDefault();
    // }


    return (
        <div className=" max-w-[400px] mx-auto border border-gray-400 rounded-t-md mt-20 ">
            <h3 className="text-[20px] text-[#3B5998] font-semibold border-b border-gray-400 px-2 ">{formTitle}</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 my-5 px-2  ">
                <div>
                    <p>Handle/Email</p>
                    <input type="email" name="email"  id="" className="border border-gray-500 bg-[#E8F0FE] rounded-sm px-1 " />
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" name="password"  id="" className="border border-gray-500 bg-[#E8F0FE] rounded-sm px-1 " />
                </div>
                {
                    children
                }
                <div className=" flex gap-1 ">
                    <input type="checkbox" name="checkbox" id="" />
                    <p className=" text-[11px] ">{checkBoxText}</p>
                </div>
                <div>
                    <button className=" btn h-[30px] bg-[#F5F5F5] border border-gray-500  ">{submitText}</button>
                    <p className=" text-[11px] text-blue-700 font-semibold underline text-end">Forgot your password?</p>
                </div>
            </form>

            <p className="text-[11px] text-end underline bg-[#F5F5F5] text-blue-700 font-semibold border-t border-gray-400 px-2">Use Gmail</p>
        </div>
    );
};

export default ReusableForm;