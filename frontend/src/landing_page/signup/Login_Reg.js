// import React from "react"
// import TextField from '@mui/material/TextField';


// function Login_Reg() {
//     return (
// <div className="container">
//     <div className="row">
// <div className="col-6 mt-3">
//             <img src="media\images\account_open.svg " style={{ marginLeft: "130px" }} />
//         </div >
//                 <div className="col-6  mt-3 mb-5">
//                     <h1 className="fw-semibold">Login</h1>
//                     <TextField id="outlined-basic" label="Username" variant="outlined" className="col-8" /> <br /><br />
//                     <TextField id="outlined-basic" label="Password" variant="outlined" className="col-8" />
//                     <br /><br />
//                     <button className="btn btn-primary btn-lg col-6"> Submit</button>

//                     <p style={{ fontSize: "13px", marginTop: "20px" }}>By proceeding, you agree to the Zerodha terms & privacy policy</p>
//                 </div>
//             </div>
//         </div>

//     );
// }
// export default Login_Reg;

import { useState } from 'react';
import './Login_Reg.css';

function Login_Reg() {
    const [isLogin, setIsLogin] = useState(true);

    // Login state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Register state
    const [name, setName] = useState('');
    const [regUsername, setRegUsername] = useState('');
    const [regPassword, setRegPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        // Fetch login API
        alert(`Logging in with: ${username} | ${password}`);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        // Fetch register API
        alert(`Registering: ${name} | ${regUsername} | ${regPassword}`);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 mt-5">
                    <img src="media\images\account_open.svg " style={{ marginLeft: "130px" }} />
                </div >

                <div className="col-6 mt-3">
                    <div className="auth-container">
                        <div className="switch-tabs">
                            <button onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''}>Login</button>
                            <button onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''}>Register</button>
                        </div>

                        {isLogin ? (
                            <form onSubmit={handleLogin}>
                                <h2>Login</h2>
                                <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <button type="submit">Submit</button>
                            </form>
                        ) : (
                            <form onSubmit={handleRegister}>
                                <h2>Register</h2>
                                <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                                <input placeholder="Username" value={regUsername} onChange={(e) => setRegUsername(e.target.value)} />
                                <input placeholder="Password" type="password" value={regPassword} onChange={(e) => setRegPassword(e.target.value)} />
                                <button type="submit">Register</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login_Reg;