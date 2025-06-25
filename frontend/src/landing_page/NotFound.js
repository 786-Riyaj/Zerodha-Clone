import React from 'react';

function NotFound() {
    return (
        <div className='container  p-2  mt-5'>
            <div className='row text-center'>

                <h1 className='mt-4 '>404 couldn’t find that page</h1>
                <p className='mt-2 text-muted'>
                    We couldn’t find the page you were looking for . Visit
                    <a href='/'> Zerodha’s home page</a>

                </p>
            </div>
        </div>
    );
}
export default NotFound;