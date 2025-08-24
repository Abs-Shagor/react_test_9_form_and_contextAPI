import Myself from './Myself'
import Brother from './Brother'
import Sister from './Sister'


const Father = () => {
    return (
        <div className='p-5 border border-green-700 bg-blue-300'>
            <h1 className=' text-[25px] '>Father</h1>
            <div className=' flex gap-5 '>
                <Myself ></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Father;