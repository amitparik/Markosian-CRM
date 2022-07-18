import { useState } from 'react';
import './style.css'; 
import InputBox from '../UI/InputBox';
import Button from '../UI/Button';
import { Link } from "react-router-dom";

export default function Registration() {

    const [fields, setFields] = useState({});
    const [errors, setErrors] = useState({});

    const inputChange = (event) => {
        let data = fields;
        data[event.target.name] = event.target.name == 'terms_policy' ? event.target.checked : event.target.value;     
        setFields({ ...data });   
    };
    
    const _validateForm = () => {
        let formFields = fields;
        let response = validateLogin(formFields);
        setErrors(response.errors);
        return response.formIsValid;
    };

    const formSubmit = (event) => {
        event.preventDefault();
        if (_validateForm()) {
            const postData = new FormData(event.target);
        }
    };
    
    const validateLogin = (fieldsValue) => {
        let errors = {};
        let formIsValid = true;
        
        if (!fields["username"] || fields["username"].trim() === '') {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
        }
        else if (fields["username"].length < 5) {
            formIsValid = false;
            errors["username"] = "*please enter minimum 6 character";
        }

        if (!fields["email"] || fields["email"].trim() === '') {
            formIsValid = false;
            errors["email"] = "*Please enter your email.";
        }
    
        if (typeof fields["email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "*Please enter valid email.";
            }
        }
    
        if (!fields["password"] || fields["password"].trim() === '') {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }
        else if (fields["password"].length < 4) {
            formIsValid = false;
            errors["password"] = "*please enter minimum 5 character";
        }
        
        if (!fields["password"] || fields["password"].trim() === '') {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (!fields["terms_policy"] || fields["terms_policy"].checked == false) {
            formIsValid = false;
            errors["terms_policy"] = "*Please agree to the Terms and Policy.";
        }
          
        return {
            errors : errors,
            formIsValid : formIsValid
        };  
    }

    return (
        <form className="login100-form validate-form" onSubmit={(event) => formSubmit(event)}>
            <span className="login100-form-title">
                Registration
            </span>
            <div className="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                <span className="input-group-text bg-white text-muted">
                    <i className="fa fa-user" aria-hidden="true"></i>
                </span>
                <InputBox onChange={(event) => inputChange(event)} name="username" className="input100 border-start-0 ms-0 form-control fs-15" type="text" placeholder="User name"/>
                <div className="errorMsg text-danger">{errors.username}</div>
            </div>
            <div className="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                <span className="input-group-text bg-white text-muted">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
                <InputBox onChange={(event) => inputChange(event)} name="email" className="input100 border-start-0 ms-0 form-control fs-15" type="email" placeholder="Email"/>
                <div className="errorMsg text-danger">{errors.email}</div>
            </div>
            <div className="wrap-input100 validate-input input-group" id="Password-toggle">
                <span className="input-group-text bg-white text-muted">
                    <i className="fa fa-key" aria-hidden="true"></i>
                </span>
                <InputBox onChange={(event) => inputChange(event)} name="password" className="input100 border-start-0 ms-0 form-control fs-15" type="password" placeholder="Password"/>
                <div className="errorMsg text-danger">{errors.password}</div>
            </div>
            <div className="wrap-input100">
                <label className="custom-control custom-checkbox mt-4 fs-14">
                    <InputBox onChange={(event) => inputChange(event)} type="checkbox" name="terms_policy" className=""/>
                    <span className="">Agree the <a href="javascript:void(0);">Terms and Policy</a></span>
                    <div className="errorMsg text-danger">{errors.terms_policy}</div>
                </label>
                </div>
            <div className="container-login100-form-btn">
                <Button type='submit' className='login100-form-btn btn-primary' value='Register'/>
            </div>
            <div className="text-center pt-3">
                <p className="text-dark mb-0 fs-14">Already have account?<Link to="/login" className="text-primary ms-1">Sign In</Link></p>
            </div>
            <label className="login-social-icon"><span>Register with Social</span></label>
            <div className="d-flex justify-content-center">
                <Link to=" ">
                    <div className="social-login me-4 text-center">
                        <i className="fa fa-google"></i>
                    </div>
                </Link>
                <Link to=" ">
                    <div className="social-login me-4 text-center">
                        <i className="fa fa-facebook"></i>
                    </div>
                </Link>
                <Link to=" ">
                    <div className="social-login text-center">
                        <i className="fa fa-twitter"></i>
                    </div>
                </Link>
            </div>
        </form>

    );
}