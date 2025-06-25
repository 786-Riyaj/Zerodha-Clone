import React from "react";


function DematAccoundt() {
    return (
        <div className="container">
            <div className="row">
                <h1 style={{ textAlign: "center", marginTop: "45px", marginBottom: "25px", }}>Investment options with Zerodha demat account </h1>


                <div className="col-6  mt-5">
                    <div className="row">
                        <div className="col-6 mt-5">
                            <img style={{ marginLeft: "195px" }} src="media\images\stocks-acop.svg " />
                        </div >
                        <div className="col-6 mt-5 text-muted">
                            <h3 className="fw-semibold"> Stocks </h3>
                            <p>Invest in all exchange-listed <br />securities</p>
                        </div >

                        <div className="col-6 mt-5">
                            <img style={{ marginLeft: "175px" }} src="media\images\ipo-acop.svg " />
                        </div >
                        <div className="col-6 mt-5 text-muted">
                            <h3 className="fw-semibold"> IPO </h3>
                            <p>Apply to the latest IPOs instantly <br />via UPI</p>
                        </div >
                    </div>
                </div>
                <div className="col-6  mt-5">
                    <div className="row me-5">
                        <div className="col-3 mt-5">
                            <img src="media\images\mf-acop.svg " />
                        </div >
                        <div className="col-6 mt-5 text-muted">
                            <h3 className="fw-semibold"> Mutual funds </h3>
                            <p>Invest in commission-free direct <br />mutual funds</p>
                        </div >
                        <br />
                        <div className="col-3 mt-5">
                            <img src="media\images\fo-acop.svg " />
                        </div >
                        <div className="col-6 mt-5 text-muted">
                            <h3 className="fw-semibold" > Futures & options </h3>
                            <p>Hedge and mitigate market risk <br />through simplified F&O trading</p>
                        </div >
                    </div>
                </div>
            </div>


            {/* <button class=" btn btn-primary btn-lg mt-5 mb-5" style={{ textAlign: "center" }}>Explore Investment</button> */}

            <div className="row mt-5">
                <h1 style={{ textAlign: "center", marginRight: "50px", marginLeft: "15px", marginTop: "30px", marginBottom: "20px" }}>Steps to open a demat account with Zerodha </h1>
                <div className="row">
                    <div className="col-6 mt-5">
                        <img style={{ marginLeft: "200px" }} src="media\images\steps-acop.svg" />
                    </div>
                    <div className="col-6 mt-5">
                        <div style={{ fontSize: "23px" }}>

                            <p> 1- Enter the requested details</p>
                            <hr style={{ width: "400px" }} />
                            <p> 2- Complete e-sign & verification</p>
                            <hr style={{ width: "400px" }} />
                            <p> 3- Start investing!</p></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 mt-5">
                        <img style={{ width: "350px", marginLeft: "200px", marginTop: "70px" }} src="media\images\acop-benefits.svg" />
                        <h3 style={{ marginTop: "25px", marginLeft: "150px" }}>Benefits of opening a Zerodha <br />demat account</h3>
                    </div>
                    <div className="col-6 mt-5">
                        <h2 className="fw-semibold text-muted mb-4 mt-5 ">Unbeatable pricing</h2>
                        <p >Zero charges for equity & mutual fund investments. Flat ₹20 fees for <br /> intraday and F&O trades.</p>
                        <h2 className="fw-semibold text-muted mb-4">Best investing experience</h2>
                        <p>Simple and intuitive trading platform with an easy-to-understand user  <br /> interface.</p>
                        <h2 className="fw-semibold text-muted mb-4">No spam or gimmicks</h2>
                        <p>Committed to transparency — no gimmicks, spam, "gamification", or  <br />intrusive push notifications.</p>
                        <h2 className="fw-semibold text-muted mb-4">The Zerodha universe</h2>
                        <p>More than just an app — gain free access to the entire ecosystem of  <br />our partner products.</p>
                    </div>
                </div>
            </div>
        </div >

    );
}
export default DematAccoundt;