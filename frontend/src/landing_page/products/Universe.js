import React from 'react';
function Universe() {
    return ( 
        <div className='container '>
        <div className='row '>
            <div className='text-center'>
            <h1 className='mt-5'>The Zerodha Universe</h1>
            <p className='mt-5'>Extend your trading and investment experience even further with our partner platforms</p></div>
            
     

            <div className='col-4  p-5'>
            <img src="assets\zerodhaFundhouse - Copy.png" style={{width:"50%"}}></img>
            <p className='text-muted text-small'>Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals.
            </p>
                
                
            </div>
            <div className='col-4 p-5'>
            <img src="assets\sensibullLogo.svg" style={{width:"50%"}} ></img>
            <p className='text-muted text-small'>Options trading platform that lets you
            create strategies, analyze positions, and examine
            data points like open interest, FII/DII, and more.
            </p>
                
                
            </div>
            <div className='col-4 p-5'>
            <img src="assets\streakLogo - Copy.png" style={{width:"50%"}} ></img>
            <p className='text-muted text-small'>Systematic trading platform that allows you to create and backfest startegies without coding.</p>
                
                
            </div>
            <div className='col-4  p-5'>
            <img src="assets\smallcaseLogo.png" style={{width:"50%"}}></img>
            <p className='text-muted text-small'>Thematic investing platform
             that helps you invest in diversified
             baskets of stocks on ETFs.             
            </p>
                
                
            </div>
            <div className='col-4  p-5'>
            <img src="assets\dittoLogo.png" style={{width:"50%"}}></img>
            <p className='text-muted text-small'>Personalized advice on life
            and health insurance. No spam
            and no mis-selling.
           
            </p>
                
                
            </div>
            <div className='col-4  p-5'>
            <img src="assets\goldenpiLogo (1).png" style={{width:"50%"}}></img>
            <p className='text-muted text-small'>Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals.
            </p>
                
                
            </div>
            <button  className='p-2 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto"}}>Sign up Now</button>
        </div>
        
       </div>
     );
}

export default Universe;