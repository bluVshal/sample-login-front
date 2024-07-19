import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        errors:[]
    });

    const validation = (values) => {
        let error = {};
        const email_pattern = /^[^\s@]+@[^\s]+\.[^\s]+$/
        const pass_pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

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

    const handleSubmit = (event) =>{
        event.preventDefault();       
        setErrors(validation(values));
        if(errors.name ==="" && errors.email ===""){
            
        }
    };

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value]}))
    };

    return(
        <div className='d-flex justify-content-center align-items-center bg-black vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2> Login </h2>
                <form action="">
                    <div className='mb-3'>
                        <label htmlFor='email'><b>Email</b></label>
                        <input name='email' type="email" onInput={handleInput} placeholder='Enter Email' className='form-control rounded-0'/>
                        <span>{errors.email && <span className='text-danger'> {errors.email} </span>}</span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><b>Password</b></label>
                        <input name='password' type='password' onInput={handleInput} placeholder='Enter Password' className='form-control rounded-0'></input>
                        <span>{errors.password && <span className='text-danger'>{errors.password}</span>}</span>
                    </div>
                    <p> Do you agree to our terms and policies? </p>
                    <button type="submit" onClick={handleSubmit} className='btn btn-success w-100'><u>L</u>og In</button>
                    <p> Are you new here? Create your account</p>
                    <Link to='/signup' className='btn btn-primary border w-100'><u>C</u>reate Account</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;