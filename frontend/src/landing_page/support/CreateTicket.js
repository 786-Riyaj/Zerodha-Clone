import React from 'react';

function CreateTicket() {
    return (
        <div className='container'>
            <div className='row p-2 mt-5 mb-2'>
                <h4 className='text-muted'>To create a ticket, select a relevant topic</h4>

                <div className='col-4 p-3 mt-2 mb-2'>
                    <i class="fa fa-plus-circle fa-lg me-2" aria-hidden="true"></i>
                    <a href='' className='fs-5 text-dark ' style={{ lineHeight: '2.3' }} >
                        Account Opening </a> <br />
                    <a href='' style={{ lineHeight: '2.3' }}>Resident individual</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}>Minor</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}>Non Resident Indian (NRI)</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}>Company, Partnership, HUF and LLP</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}>Glossary</a><br />

                </div>
                <div className='col-4 p-3 mt-2 mb-2'>
                    <i class="fa fa-user-o  fa-lg me-2" aria-hidden="true"></i>
                    <a href='' className='fs-5  text-dark' style={{ lineHeight: '2.3' }}>
                        Your Zerodha Account  </a> <br />
                    <a href='' style={{ lineHeight: '2.3' }}>Your Profile</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}>Account modification</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}>Client Master Report (CMR) and Depository Participant (DP)</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}>Nomination</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}>Transfer and conversion of securities</a><br />

                </div>
                <div className='col-4 p-3 mt-2 mb-2'>
                    <i class="fa fa-bar-chart fa-lg me-2" aria-hidden="true"></i>
                    <a href='' className='fs-5 mt-5 text-dark' style={{ lineHeight: '2.3' }}>
                        Kite  </a> <br />
                    <a href='' style={{ lineHeight: '2.3' }}>IPO</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}> Trading FAQs</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}>Margin Trading Facility (MTF) and Margins</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}>Charts and orders</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}>Alerts and Nudges</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}> General</a><br />
                </div>

                <div className='col-4 p-3 mt-2 '>
                    <i class="fa fa-archive fa-lg me-2" aria-hidden="true"></i>
                    <a href='' className='fs-5 mt-5 text-dark' style={{ lineHeight: '2.3' }}>
                        Funds   </a> <br />
                    <a href='' style={{ lineHeight: '2.3' }}  >Add money</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}  >Withdraw money</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}  >Add bank accounts</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}> eMandates</a>
                </div>

                <div className='col-4 p-3 mt-2'>
                    <i class="fa fa-sun-o fa-lg me-2" aria-hidden="true"></i>
                    <a href='' className='fs-5 mt-2 text-dark' style={{ lineHeight: '2.3' }}>
                        Console   </a> <br />
                    <a href='' style={{ lineHeight: '2.3' }}  >Portfolio</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}  >Corporate actions</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}  >Funds statement</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}  >Reports</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}  >Profile</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}> Segments</a>
                </div>

                <div className='col-4 p-3 mt-2'>
                    <i class="fa fa-circle-o fa-lg me-2" aria-hidden="true"></i>
                    <a href='' className='fs-5 text-dark' style={{ lineHeight: '2.3' }}>
                        Coin   </a> <br />
                    <a href='' style={{ lineHeight: '2.3' }}  >Understanding mutual funds and Coin</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}  >Coin app</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}  >Coin web</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}  >Transactions and reports</a><br />
                    <a href='' style={{ lineHeight: '2.3' }}  >National Pension Scheme (NPS) </a>
                </div>
            </div>
        </div>
    );
}
export default CreateTicket;