import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id="supportHero">
            <div className='p-3 ' id="supportWrapper">
                <h4 style={{ paddingTop: "35px" }}>
                    Support Portal
                </h4>
                <a href='' style={{ paddingTop: "35px" }}>Track tickets</a>
            </div>
            <div className='row p-3 m-3'>
                <div className='col-6 p-3 mb-5' >
                    <h4 className='fs-3 ms-5 '>Search for an answer or browse help topics to create a ticket</h4>
                    <input className="mb-3 ms-5 mt-3" placeholder='Eg: how do i active F&O, why is my order getting rejected...' />
                    <br />

                    <u> <a href='' style={{ padding: "20px", fontSize: "18px" }}>Track account opening</a></u>
                    <u> <a href='' style={{ padding: "10px", fontSize: "18px" }}> Track segment activation</a></u>
                    <u> <a href='' style={{ padding: "10px", fontSize: "18px" }}>Intraday margins</a></u><br />
                    <u> <a href='' style={{ padding: "20px", fontSize: "18px", lineHeight: "2.5" }}>Kite user manual </a></u>
                </div>

                <div className='col-6 p-3 m '>
                    <h4 className='m-4 ms-5'>Featured</h4>
                    <ol style={{ fontSize: "18px", marginLeft: "70px" }}>
                        <li><a href=''><u>MCX Crude option contract expiry - April 2025 </u></a></li>
                        <li className='mt-3'><a href=''> <u>Surveillance measure on scrips - April 2025</u></a></li>
                    </ol>
                </div>
            </div>

        </section>
    );
}
export default Hero;