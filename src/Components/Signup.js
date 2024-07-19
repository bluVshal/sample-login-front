import React, {useState} from 'react';
import { Link } from 'react-router-dom';
const Signup = () =>{
    
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        errors:[]
    });
    
    const Validation = (values) => {
        
        let error = {};
        const email_pattern = /^[^\s@]+@[^\s]+\.[^\s]+$/
        const pass_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

        if(values.email === ""){
            error.email = "Please enter your email"
        }
        else if(!email_pattern.test(values.email)){
            error.email = "Please enter a valid email";
        }

        if(values.password === ""){
            error.password = "Please enter your password";
        }
        else if(!pass_pattern.test(values.password)){
            error.password = "Please enter a valid password";
        }

        return error;

    };

    return(
        <div className='d-flex justify-content-center align-items-center bg-black vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2> Sign up</h2>
                <form action="">
                    <div className='mb-3'>
                        <label htmlFor='email'><b>Name</b></label>
                        <input type="email" placeholder='Enter Email' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><b>Email</b></label>
                        <input type="email" placeholder='Enter Email' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><b>Password</b></label>
                        <input type='password' placeholder='Enter Password' className='form-control rounded-0'></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><b>Confirm Password</b></label>
                        <input type='password' placeholder='Confirm Password' className='form-control rounded-0'></input>
                    </div>
                    <p> Do you agree to our terms and policies? </p>
                    <button className='btn btn-success w-100'><u>S</u>ign up</button>
                    <p> Already a member ? </p>
                    <Link to='/' className='btn btn-primary border w-100'><u>L</u>og in</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup;