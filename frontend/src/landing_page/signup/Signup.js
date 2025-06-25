import React from 'react';
import Hero from './Hero';
import DematAccound from './/dematAccount'
import AccountType from './accounttype';
import FAQs from "./faqs";
import Login_Reg from './Login_Reg';
function Signup() {
    return (
        <>
            <Hero />
            <Login_Reg />
            <DematAccound />
            <AccountType />
            <FAQs />

        </>
    );
}
export default Signup;




