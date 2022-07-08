import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Loader from '../../components/Loader/Loader';
import Inputbox from '../../components/UI/Inputbox/Inputbox';
import validateLogin from '../../components/Login/LoginValidation';
import MobileLogin from './MobileLogin';

const Login = () => {

    const [fields, setFields] = useState({});
    const [errors, setErrors] = useState({});
    const [applyCheck] = useState(false);
    const [mobileLogin, setMobileLogin] = useState(false);

    const _handleChange = (event) => {
        let data = fields;
        data[event.target.name] = event.target.value;
        console.log(
          "event.target.name ",
          event.target.name,
          " event.target.value ",
          event.target.value
        );
        setFields({ ...data });
      };

      const _validateForm = () => {
        let formFields = fields;
        let response = validateLogin(formFields, applyCheck);
        setErrors(response.errors);
        return response.formIsValid;
      };

      const _handleSubmit = (event) => {
        event.preventDefault();
        if (_validateForm()) {
            const postData = new FormData(event.target);
            const value = Object.fromEntries(postData.entries());
            console.log('All fields: ', fields);
            // To store data
            //localStorage.setItem('Data', {Token:'xyzabc', ...JSON.stringify(fields)});
            localStorage.setItem("Data", JSON.stringify(value));
            //dispatch(submitProfileFormData(currentId, postData)); //action is called to submit data
        }
    };
    
    return (
        <>
           {/* <!-- PAGE --> */}
           {/* <!-- BACKGROUND-IMAGE --> */}
    <div className="login-img">

       <Loader/>
        
        <div className="page">
            <div className="">

                {/* <!-- CONTAINER OPEN --> */}
                <div className="col col-login mx-auto mt-7">
                    <div className="text-center">
                        <img src="assets/images/brand/logo-white.png" className="header-brand-img" alt="" />
                    </div>
                </div>

                <div className="container-login100">
                    <div className="wrap-login100 p-6">
                        <form onSubmit={(event) => _handleSubmit(event)} className="login100-form validate-form">
                            <span className="login100-form-title pb-5">
                                Login
                            </span>
                            <div className="panel panel-primary">
                                <div className="tab-menu-heading">
                                    <div className="tabs-menu1">
                                        {/* <!-- Tabs --> */}
                                        <ul className="nav panel-tabs">
                                            <li className="mx-0"><a href="#tab5" className="active" data-bs-toggle="tab">Email</a></li>
                                            {mobileLogin ?
                                            <li className="mx-0"><a href="#tab6" data-bs-toggle="tab">Mobile</a></li>
                                            :""}
                                        </ul>
                                    </div>
                                </div>
                                <div className="panel-body tabs-menu-body p-0 pt-5">
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="tab5">
                                            <div className="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                                                <Link to="" className="input-group-text bg-white text-muted">
                                                    <i className="zmdi zmdi-email text-muted" aria-hidden="true"></i>
                                                </Link>
                                                <Inputbox
                                                        labelStatus={false}
                                                        className="input100 border-start-0 form-control ms-0"
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        handleinputchange={(event) => _handleChange(event)}
                                                        placeholder="Email"
                                                    />
                                                    <div className="text-danger">{errors.email}</div>
                                            </div>
                                            <div className="wrap-input100 validate-input input-group" id="Password-toggle">
                                                <Link to="" className="input-group-text bg-white text-muted">
                                                    <i className="zmdi zmdi-eye text-muted" aria-hidden="true"></i>
                                                </Link>
                                                <Inputbox
                                                        labelStatus={false}
                                                        className="input100 border-start-0 form-control ms-0"
                                                        type="password"
                                                        name="password"
                                                        id="password"
                                                        handleinputchange={(event) => _handleChange(event)}
                                                        placeholder="Password"
                                                    />
                                                    <div className="text-danger">{errors.password}</div>                                            </div>
                                            <div className="text-end pt-4">
                                                <p className="mb-0"><a href="forgot-password.html" className="text-primary ms-1">Forgot Password?</a></p>
                                            </div>
                                            <div className="container-login100-form-btn">
                                            <Inputbox
                                                labelStatus={false}
                                                className="login100-form-btn btn-primary"
                                                type="submit"
                                                value="Login"                                               
                                            />
                                                
                                            </div>
                                            <div className="text-center pt-3">
                                                <p className="text-dark mb-0">Not a member?<a href="register.html" className="text-primary ms-1">Sign UP</a></p>
                                            </div>
                                            <label className="login-social-icon"><span>Login with Social</span></label>
                                            <div className="d-flex justify-content-center">
                                                <Link to="">
                                                    <div className="social-login me-4 text-center">
                                                        <i className="fa fa-google"></i>
                                                    </div>
                                                </Link>
                                                <Link to="">
                                                    <div className="social-login me-4 text-center">
                                                        <i className="fa fa-facebook"></i>
                                                    </div>
                                                </Link>
                                                <Link to="">
                                                    <div className="social-login text-center">
                                                        <i className="fa fa-twitter"></i>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        

                                        {mobileLogin ?
                                        <MobileLogin />
                                        :""}
                                        
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
                {/* <!-- CONTAINER CLOSED --> */}
            </div>
        </div>
        {/* <!-- End PAGE --> */}
        </div>
    {/* <!-- BACKGROUND-IMAGE CLOSED --> */}
        </>
    )
}


export default Login;