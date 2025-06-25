import React from 'react';

function RightSection({ imageURL,
    productName,
    productDescription,
    learnMore,
    kiteConnect }) {
    return (
        <div className='container '>
            <div className='row p-2'>

                <div className='col-5  p-5 mt-5' style={{ width: "40%", fontSize: "17px" }}>
                    <h1 className='mb-4 fw-semibold'>{productName}</h1>
                    <p >{productDescription}</p>
                    <div>
                        <a href={learnMore} > Learn More  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                        {/* <a href={kiteConnect} > Kite Connect  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> */}
                    </div>
                </div>
                <div className='col-7 '>
                    <img src={imageURL} style={{ marginLeft: "100px" }} />
                </div>
            </div>
        </div>
    );
}
export default RightSection;