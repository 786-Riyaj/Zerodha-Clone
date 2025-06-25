import React from 'react';

function AccountType() {
    return (
        <div className='container p-4'>
            <h1 style={{ lineHeight: "25px", fontWeight: "600", marginInline: "120px", marginBottom: "60px" }} >FAQs</h1>
            <div>
                <div className="progress">
                    <div className='progress-bar'></div>
                </div>
                <h4 className='Faq-h4 text-muted'>What is a Zerodha account?</h4>
                <div className="progress">
                    <div className='progress-bar'></div>
                </div>
                <h4 className='Faq-h4 text-muted'>What documents are required to open a demat account?</h4>
                <div className="progress">
                    <div className='progress-bar'></div>
                </div>
                <h4 className='Faq-h4 text-muted'>Is Zerodha account opening free?</h4>
                <div className="progress">
                    <div className='progress-bar'></div>
                </div>
                <h4 className='Faq-h4 text-muted'>Are there any maintenance charges for a demat account?</h4>
                <div className="progress">
                    <div className='progress-bar'></div>
                </div>
                <h4 className='Faq-h4 text-muted'>Can I open a demat account without a bank account?</h4>
            </div>
        </div>
    );
}
export default AccountType;






