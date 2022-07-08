import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Inputbox from '../../components/UI/Inputbox/Inputbox';

const MobileLogin = () => {

    const [fields, setFields] = useState({});
    const [errors, setErrors] = useState({});
    const [applyCheck] = useState(false);

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
    return (
    <>
    <div className="tab-pane" id="tab6">
        <div id="mobile-num" className="wrap-input100 validate-input input-group mb-4">
            <Link to="" className="input-group-text bg-white text-muted">
                <span>+91</span>
            </Link>
            <Inputbox
                labelStatus={false}
                className="input100 border-start-0 form-control ms-0"
                type="text"
                name="mobile"
                id="mobile"
                handleinputchange={(event) => _handleChange(event)}
                placeholder="Mobile"
            />
            <div className="text-danger">{errors.mobile}</div>
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
    </>
    )
}

export default MobileLogin;