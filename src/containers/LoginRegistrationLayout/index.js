import Registration from '../../components/Registration/index';
import './style.css';
import Login from '../Login/Login';
import Loader from '../../components/Loader/Loader';

export default function index(props) {
    
  return (
    <div className="app sidebar-mini ltr transparent-mode">
        <div className="login-img">
            {/* <div id="global-loader">
                <img src="assets/images/loader.svg" className="loader-img" alt="Loader"/>
            </div> */}
             <Loader/>
            <div className="page">
                <div className="col-login mx-auto mt-7">
                    <div className="text-center">
                        <img src="assets/images/brand/logo-white.png" className="header-brand-img" alt=""/>
                    </div>
                </div>
                <div className="container-login100">
                    <div className="wrap-login100 p-6">
                        {(props.pageName === "login") ? <Login /> : ""}
                        {(props.pageName === "registration") ? <Registration /> : ""}
                    </div>
                </div>
            </div>
        </div>
    </div>    
  );
}
