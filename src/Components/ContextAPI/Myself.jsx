import React from 'react';
import SpecialPerson from './SpecialPerson';

const Myself = () => {
    return (
        <div className='p-5 border border-green-700 bg-violet-200'>
            <h1 className=' text-[25px] '>Myself</h1>
            <SpecialPerson ></SpecialPerson>
        </div>
    );
};

export default Myself;