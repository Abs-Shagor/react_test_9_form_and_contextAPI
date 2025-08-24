import React from 'react';
import ReusableForm from './ReusableForm';

const Register = () => {

    function handleSubmit(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const ConfirmPassword = event.target.ConfirmPassword.value;
        const checked = event.target.checkbox.checked;
        if(password===ConfirmPassword && checked ) {
            alert('Registration Completed!');
        }
        else {
            alert('Something Wrong!')
        }
    }
    return (
        <ReusableForm formTitle={'Register in Codeforces'} submitText={'Register'} checkBoxText={'I have Accept the term and conditions of Codeforces'} handleSubmit={handleSubmit} >
            <div>
                <p>Confirm Password</p>
                <input type="password" name="ConfirmPassword" id="" className="border border-gray-500 bg-[#E8F0FE] rounded-sm px-1 " />
            </div>
        </ReusableForm>
    );
};

export default Register;