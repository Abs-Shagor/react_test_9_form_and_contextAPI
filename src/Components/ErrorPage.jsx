import { useRouteError, useNavigate } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    const navigate = useNavigate();

    function handleBackBtn() {
        navigate(-1);
    }

    return (
        <div className="text-center text-gray-600 font-semibold">
            <div className=" text-[40px] ">
                <p> {error.status} !</p>
                <p> The page is {error.statusText || error.message} </p>
            </div>
            <button onClick={handleBackBtn} className="btn mt-30">Back To Home</button>
        </div>
    );
};

export default ErrorPage;