import React from 'react';

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore }) {
    return (
        <div className='container '>
            <div className='row p-5 text-muted '>
                <div className='col-7  p-5'>
                    <img src={imageURL} />
                </div>
                <div className='col-5  p-5 mt-5' style={{ width: "41%", fontSize: "17px" }}>
                    <h1 className='mb-4 fw-semibold'>{productName}</h1>
                    <p >{productDescription}</p>
                    <div>
                        <a href={tryDemo}>Try Demo  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{ marginLeft: "75px" }}> Learn More  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-4'  >
                        <a href={googlePlay}><img src='media\images\googlePlayBadge.svg' /></a>
                        <a href={appStore} style={{ marginLeft: "40px" }}><img src='media\images\appstoreBadge.svg' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LeftSection;