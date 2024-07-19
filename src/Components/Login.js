import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div className='d-flex justify-content-center align-items-center bg-black vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form action="">
                    <div className='mb-3'>
                        <label htmlFor='email'><b>Email</b></label>
                        <input type="email" placeholder='Enter Email' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><b>Password</b></label>
                        <input type='password' placeholder='Enter Password' className='form-control rounded-0'></input>
                    </div>
                    <button className='btn btn-success w-100'><u>L</u>og In</button>
                    <p> Do you agree to our terms and policies? </p>
                    <Link to='/signup' className='btn btn-primary border w-100'><u>C</u>reate Account</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;