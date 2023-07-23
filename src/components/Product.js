import './Product.css';
import Description from "./Description";
import Name from "./Name";
import Price from "./Price";
import Imag from "./Image/Imag";
import Objname from "./Name";
import Objdesc from "./Description";
import Objprice from "./Price";
import { useState } from 'react';

let greeting = 'Hello , ';
function Product() {
    const [first, setFirstName] = useState('');
    const handleName = (event) => {
        if (event.code === "Enter") {
            setFirstName(event.target.value);
        }

    }
    let txt = /[!@#%&_=.,'":;$]/g;
    let txt2 = txt.exec(first)
    if (first !== "" && isNaN(first) && first.length >= 3 && !(txt2) && greeting !== "") {
        return (
            <>
                <div className="Products">
                    <Imag />
                    <Name {...Objname} />
                    <Price {...Objprice} />
                    <Description {...Objdesc} />
                </div>
                <input onKeyUp={handleName} type='text' placeholder='Type your name & hit enterKey...' />
                <p style={{ color: "green" }}>{greeting}{first}!</p>
            </>
        )
    }
    else {
        return (
            <>
                <div className='noImage'>
                    <img src='pic.jpg' alt='Type in your Firstname to see the Cake!' style={{ color: 'red' }} />
                    <Name {...Objname} />
                    <Price {...Objprice} />
                    <Description {...Objdesc} />
                </div>
                <input onKeyUp={handleName} type='text' placeholder='Type your name & hit enterKey...' />
                <p style={{ color: 'red' }}>{greeting}{"there!"}</p>
            </>
        )
    }
}
export default Product;