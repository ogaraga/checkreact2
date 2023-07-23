import './Price.css';
import React from 'react';
function Price() {
    return (
        <div>
            <Objprice price='Price: $1,000' />
        </div>
    )
}
export const Objprice = (props) => {
    return <div className='priceVal'>
        {props.price}
    </div>
}

export default Price