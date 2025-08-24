import React from 'react';
import Urmi from './Urmi'
import Samira from './Samira'
import Tamanna from './Tamanna'

const Uncle = () => {
    return (
        <div className='p-5 border border-green-700 bg-green-200'>
            <h1 className=' text-[25px] '>Uncle</h1>

            <div className=' flex gap-5 '>
                <Urmi></Urmi>
                <Samira></Samira>
                <Tamanna></Tamanna>
            </div>
        </div>
    );
};

export default Uncle;