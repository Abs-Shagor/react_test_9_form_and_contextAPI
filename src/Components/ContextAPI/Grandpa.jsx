import Father from './Father'
import Uncle from './Uncle'
import Aunty from './Aunty'
import { GiftContext, MoneyContext } from './Context';
import { useState } from 'react';


// To use Context API, We have to follow 3 simple rule
// 1. Create a Context and export it
// 2. Add Provider for the Context with a value
// 3. import it where you want to use it
// in this case, we want to send a text from grndpa to the special person


const Grandpa = () => {

    const ring = 'Diamond Ring';

    const [money, setMoney] = useState(100);


    return (
        <div className='p-5 border border-green-700 bg-amber-200'>
            <h1 className=' text-[25px] '>Grandfather</h1>
            <p>Money: {money} Taka </p>

            <MoneyContext.Provider value={[money, setMoney]}>
                <GiftContext.Provider value={ring} >
                    <div className='flex gap-10'>
                        <Father ></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </div>
                </GiftContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa; 