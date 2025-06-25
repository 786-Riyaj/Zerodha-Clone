import React from 'react';

function Pricing() {
    return (
        <div className='container'>
            <div className='row'>

                <div className='col-6'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price <br /> transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{ textDecoration: "none" }}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>



                <div className='col-6 '>
                    <div className='row'>
                        <div className='col-3 p-1 mt-3'>
                            <img src='media\images\pricing0.svg' />
                            <p>Free account
                                <br />
                                opening</p>
                        </div>

                        <div className='col-3 p-1 mt-3'>
                            <img src='media\images\pricing0.svg' />
                            <p>
                                Free equity delivery
                                <br></br>
                                and direct mutual funds
                            </p>
                        </div>

                        <div className='col-3 p-1 mt-3 '>
                            <img src='media\images\other-trades.svg' style={{}} />
                            <p>Intraday and<br></br>
                                F&O</p>
                        </div>
                    </div>
                </div>


            </div>
        </div >
    );
}
export default Pricing;