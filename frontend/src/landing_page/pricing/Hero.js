import React from "react";

function Hero() {
    return (
        <div className="container mt-5">
            <div className="row text-center p-5" >
                <h1 className="fw-semibold fs-1 mt-2">Charges</h1>
                <p className="fs-3 mt-1 text-muted mb-5">List of all charges and taxes</p>
                <div className="col-4 mt-5 p-5">
                    <img src="media\images\pricing0.svg" style={{ width: "80%" }} />
                    <h2 className="mt-4">Free equity delivery</h2>
                    <p className="text-muted mt-3">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage. </p>
                </div>
                <div className="col-4 mt-5 p-5 ">
                    <img src="media\images\other-trades.svg" style={{ width: "80%" }} />
                    <h3 className="mt-4">Intraday and F&O trades</h3>
                    <p className="text-muted mt-3">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades. </p>
                </div>
                <div className="col-4 mt-5 p-5">
                    <img src="media\images\pricing0.svg" style={{ width: "80%" }} />
                    <h2 className="mt-4 ">Free direct MF</h2>
                    <p className="text-muted mt-3">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges. </p>
                </div>
            </div>
        </div >
    );
}
export default Hero;