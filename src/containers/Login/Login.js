import React from 'react';
import { Link } from "react-router-dom";
import Loader from '../../components/Loader/Loader';

const Login = () => {
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
                        <form className="login100-form validate-form">
                            <span className="login100-form-title pb-5">
                                Login
                            </span>
                            <div className="panel panel-primary">
                                <div className="tab-menu-heading">
                                    <div className="tabs-menu1">
                                        {/* <!-- Tabs --> */}
                                        <ul className="nav panel-tabs">
                                            <li className="mx-0"><a href="#tab5" className="active" data-bs-toggle="tab">Email</a></li>
                                            <li className="mx-0"><a href="#tab6" data-bs-toggle="tab">Mobile</a></li>
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
                                                <input className="input100 border-start-0 form-control ms-0" type="email" placeholder="Email" />
                                            </div>
                                            <div className="wrap-input100 validate-input input-group" id="Password-toggle">
                                                <Link to="" className="input-group-text bg-white text-muted">
                                                    <i className="zmdi zmdi-eye text-muted" aria-hidden="true"></i>
                                                </Link>
                                                <input className="input100 border-start-0 form-control ms-0" type="password" placeholder="Password" />
                                            </div>
                                            <div className="text-end pt-4">
                                                <p className="mb-0"><a href="forgot-password.html" className="text-primary ms-1">Forgot Password?</a></p>
                                            </div>
                                            <div className="container-login100-form-btn">
                                                <Link to="index.html" className="login100-form-btn btn-primary">
                                                        Login
                                                </Link>
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
                                        <div className="tab-pane" id="tab6">
                                            <div id="mobile-num" className="wrap-input100 validate-input input-group mb-4">
                                                <Link to="" className="input-group-text bg-white text-muted">
                                                    <span>+91</span>
                                                </Link>
                                                <input className="input100 border-start-0 form-control ms-0" />
                                            </div>
                                            <div id="login-otp" className="justify-content-around mb-5">
                                                <input className="form-control text-center w-15" id="txt1" maxLength="1" />
                                                <input className="form-control text-center w-15" id="txt2" maxLength="1" />
                                                <input className="form-control text-center w-15" id="txt3" maxLength="1" />
                                                <input className="form-control text-center w-15" id="txt4" maxLength="1" />
                                            </div>
                                            <span>Note : Login with registered mobile number to generate OTP.</span>
                                            <div className="container-login100-form-btn ">
                                                <Link to="" className="login100-form-btn btn-primary" id="generate-otp">
                                                    Proceed
                                                </Link>
                                            </div>
                                        </div>
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