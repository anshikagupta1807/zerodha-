import React from 'react';
import Hero from "./Hero";
import Leftimage from"./Leftimage";
import Rightimage from "./Rightimage";
import Universe from "./Universe";
function ProductPage() {
    return( 
        <>
         <Hero/>
         <Leftimage  imageURL="assets/kite.png" productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore=""  
         />
         <Rightimage  productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore="" imageURL="assets/console.png"/>

         <Leftimage  imageURL="assets/coin.png" productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="Coin" learnMore="" googlePlay="" appStore=""  
         />
          <Rightimage   productName="Kite Connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."learnMore="" imageURL="assets/kiteconnect.png"/>

          <Leftimage  imageURL="assets/varsity.png" productName="Varsity Mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore="" googlePlay="" appStore=""  
         />
          <p  className='text-center fs-5 mb-5'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
         <Universe/>

        </>
     );
}

export default ProductPage;