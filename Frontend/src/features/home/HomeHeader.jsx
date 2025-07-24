import React from 'react';
import "./HomeHeader.scss";

function HomeHeader() {
  return (
    <div className='homeHeader'>
        <div className='infoHeader'>
            <h3>
                No fees.
                <br/>
                No minimum deposit.
                <br/>
                High interest rates.
            </h3>
            <p>Open a savings account with Argent Bank today!</p>
        </div>
    </div>
  )
}

export default HomeHeader