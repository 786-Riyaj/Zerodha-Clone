import React from "react";

function Team() {
    return (
        <div className="container">
            <div className="row  mt-5 mb-5">
                <h1 className="text-center fw-semibold text-muted ">
                    People
                </h1>
            </div>

            <div className="row mb-5   text-muted " style={{ lineHeight: "1.5", fontSize: "1.2em" }}>

                <div className="col-6 mt-2 text-center">
                    <img src='media/images/nithinKamath.jpg' style={{ borderRadius: "100%", width: "50%" }} />

                    <h3 className="mt-3">Nithin Kamath</h3>
                    <h5>Founder, CEO</h5>
                </div >
                <div className="col-6  mt-5">
                    <p className="fs-6">
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the <br />hurdles he faced during his decade long stint as a trader. Today,  <br />Zerodha has changed the landscape of the Indian broking industry.
                        <br /><br />
                        He is a member of the SEBI Secondary Market Advisory Committee <br /> (SMAC) and the Market Data Advisory Committee (MDAC).
                        <br /><br />
                        Playing basketball is his zen.
                        <br /><br />
                        Connect on <a href=''>Homepage</a> / <a href=''> TradingQnA </a> /  <a href=''>Twitter</a>
                    </p>
                </div>
                {/* edit */}
                <div className="row  mt-5 mb-5">
                    <div className="col-4 mt-5 text-center">
                        <img src='media/images/nithinKamath.jpg' style={{ borderRadius: "100%", width: "60%" }} />
                        <h3 className="mt-3">Nithin Kamath</h3>
                        <h5>Founder, CEO</h5>
                        {/* <a href="#">Bio <i class="fa fa-angle-up" aria-hidden="true"></i> </a>*/}
                        <p className="mx-4 p-5">Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess. </p>

                    </div>

                    <div className="col-4 mt-5 text-center">
                        <img src='media/images/nithinKamath.jpg' style={{ borderRadius: "100%", width: "60%" }} />
                        <h3 className="mt-3">Nithin Kamath</h3>
                        <h5>Founder, CEO</h5>
                        {/* <a href="#">Bio <i class="fa fa-angle-up" aria-hidden="true"></i></a> */}
                        <p className="mx-4 p-5">Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess. </p>
                    </div>

                    <div className="col-4 mt-5 text-center">
                        <img src='media/images/nithinKamath.jpg' style={{ borderRadius: "100%", width: "60%" }} />
                        <h3 className="mt-3">Nithin Kamath</h3>
                        <h5>Founder, CEO</h5>

                        {/* <a href="#">Bio <i class="fa fa-angle-up " aria-hidden="true"></i></a> */}
                        <p className="mx-4 p-5">Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess. </p>
                    </div>

                </div>"
            </div>
        </div >
    );
}
export default Team;