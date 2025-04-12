import React from 'react';
function Awards() {
    return (  
       <div className='container  mt-5'>
        <div className='row'>
            <div className='col-6 p-5'>
             <img src='assets/largestBroker.svg'/>
            </div>
            <div className='col-6 p-5 mt-5'>
                <h1 >Largest stock broker in India</h1>
                <p className='mb-5'>2+million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in.</p>
                <div className='row'>
                    <div className='col-6'>
                <ul>
                    <l1>
                        <p>Futures and Options</p>
                    </l1>
                    <l1>
                        <p>Commodity derivatives</p>
                    </l1>
                    <l1>
                        <p>currency derivatives</p>
                    </l1>
                </ul>
                    </div>
                    <div className='col-6'>
                <ul>
                    <l1>
                        <p>stocks and IPOs</p>
                    </l1>
                    <l1>
                        <p>Direct mutual funds</p>
                    </l1>
                    <l1>
                        <p>Bonds and Govt. Securities</p>
                    </l1>
                </ul>
                    </div>
               
                </div>
                <img src='assets/pressLogos.png' style={{width:"90%"}}></img>
            </div>
        </div>
       </div>
       








      
    );
}

export default Awards;
