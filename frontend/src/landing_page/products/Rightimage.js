import React from 'react';
function Rightimage({productName, productDescription, learnMore,imageURL}) {
    return ( 
        <div className='container '>
        <div className='row '>
            <div className='col-6 p-5 mt-5'>
     
           <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
               
                <a href={learnMore} style={{marginLeft:"50px"}}>LearnMore</a></div>
            </div>
            <div className='col-6  '>
            <img src={imageURL} ></img>
                
                
            </div>
        </div>
       </div>
     );
}

export default Rightimage;