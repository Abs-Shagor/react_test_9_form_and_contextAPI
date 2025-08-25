import React from 'react';
import { useContext } from "react";
import { GiftContext, MoneyContext } from "./Context";

const SpecialPerson = () => {

    const gift = useContext(GiftContext);
    const [money, setMoney] = useContext(MoneyContext);

    function handleMoney() {
        setMoney(money+10);
    }

    return (
        <div className='p-5 border border-green-700 bg-pink-300 '>
            <h1 className=' text-[25px] '>Special Person</h1>

            <p className='mb-5'>Yes! I got the {gift} </p>

            <button onClick={handleMoney} className='btn'>Add 10Taka</button>
        </div>
    );
};

export default SpecialPerson;