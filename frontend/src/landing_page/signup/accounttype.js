import React from 'react';

function AccountType() {
    return (
        <div className='container mt-5 p-5' >
            <h1 className='text-center mb-5'>Explore different account types </h1>
            <div className='row ms-5 '>
                <div className='col-3 border-box'>
                    <h2 className='box-h2'>Individual Account</h2>
                    <p className='box-para'>Invest in equity, mutual funds and derivatives</p>
                </div>
                <div className='col-3 border-box'>

                    <h2 className='box-h2' >HUF Account</h2>
                    <p className='box-para'>Make tax-efficient investments for your family</p>
                </div>
                <div className='col-3 border-box' >
                    <h2 className='box-h2'>NRI Account</h2>
                    <p className='box-para'>Invest in equity, mutual funds, debentures, and more</p>
                </div>
            </div>
            <div className='row  ms-5' >
                <div className='col-3 border-box ' >
                    <h2 className='box-h2'>Minor Account</h2>
                    <p className='box-para'>Teach your little ones about money & invest for their future with them</p>
                </div>
                <div className='col-3 border-box'>
                    <h2 className='box-h2'>Corporate / LLP/ Partnership
                    </h2>
                    <p className='box-para'>Manage your business surplus and investments easily</p>
                </div>
            </div>

        </div >

    );
}
export default AccountType;