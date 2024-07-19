import React, {useState} from 'react';
import { Link } from 'react-router-dom';
const Signup = () =>{
    
    const [values, setValues] = useState({
        uname:'',
        email: '',
        password1: '',
        password2: ''
    });

    const [errors, setErrors] = useState({
        errors:[]
    });
    
    const validation = (values) => {
        let error = {};
        const email_pattern = /^[^\s@]+@[^\s]+\.[^\s]+$/
        const pass_pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

        
        if(values.uname === ""){
            error.uname = "Please enter your username"
        }

        if(values.email === ""){
            error.email = "Please enter your email"
        }
        else if(!email_pattern.test(values.email)){
            error.email = "Please enter a valid email";
        }

        if(values.password1 === ""){
            error.password1 = "Please enter your password";
        }
        else if(!pass_pattern.test(values.password1)){
            error.password1 = "Please enter a valid password";
        }

        if(values.password2 === ""){
            error.password2 = "Please confirm your password";
        }
        else if(!pass_pattern.test(values.password2)){
            error.password2 = "Please enter a valid password";
        }
        if(values.password1[0] === values.password2[0]){
            error.password2 = "";
        }
        else{
            error.password2 = "Passwords do not match";
        }

        return error;

    };

    const handleSubmit = (event) =>{
        event.preventDefault();       
        setErrors(validation(values));
    };

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value]}))
    };

    return(
        <div className='d-flex justify-content-center align-items-center bg-black vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2> Sign up</h2>
                <form action="">
                    <div className='mb-3'>
                        <label htmlFor='uname'><b>Name</b></label>
                        <input name="uname" placeholder='Enter Name' className='form-control rounded-0' onInput={handleInput}/>
                        <span>{errors.uname && <span className='text-danger'> {errors.uname} </span>}</span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><b>Email</b></label>
                        <input name='email' type="email" placeholder='Enter Email' className='form-control rounded-0' onInput={handleInput}/>
                        <span>{errors.email && <span className='text-danger'> {errors.email} </span>}</span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><b>Password</b></label>
                        <input name='password1' type='password' placeholder='Enter Password' className='form-control rounded-0' onInput={handleInput}></input>
                        <span>{errors.password1 && <span className='text-danger'> {errors.password1} </span>}</span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><b>Confirm Password</b></label>
                        <input name='password2' type='password' placeholder='Confirm Password' className='form-control rounded-0' onInput={handleInput}></input>
                        <span>{errors.password2 && <span className='text-danger'> {errors.password2} </span>}</span>
                    </div>
                    <p> Do you agree to our terms and policies? </p>
                    <button onClick={handleSubmit} className='btn btn-success w-100'><u>S</u>ign up</button>
                    <p> Already a member ? </p>
                    <Link to='/' className='btn btn-primary border w-100'><u>L</u>og in</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup;