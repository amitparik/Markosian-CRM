import React from "react";

function Header()
{

return(

        <>
                    <div className="app-header header sticky">
                    <div className="container-fluid main-container">
                    <div className="d-flex">
                    <a aria-label="Hide Sidebar" className="app-sidebar__toggle" data-bs-toggle="sidebar" href="javascript:void(0)"></a>
               
                    <a className="logo-horizontal " href="index.html">
                    <img src="assets/images/brand/logo.png" className="header-brand-img desktop-logo" alt="logo"/>
                    <img src="assets/images/brand/logo-3.png" className="header-brand-img light-logo1"
                    alt="logo"/>
                    </a>
                
                    <div className="main-header-center ms-3 d-none d-lg-block">
                    <input className="form-control" placeholder="Search for results..." type="search"/>
                    <button className="btn px-0 pt-2"><i className="fe fe-search" aria-hidden="true"></i></button>
                    </div>
                    <div className="d-flex order-lg-2 ms-auto header-right-icons">
                    <div className="dropdown d-none">
                    <a href="javascript:void(0)" className="nav-link icon" data-bs-toggle="dropdown">
                    <i className="fe fe-search"></i>
                    </a>
                    <div className="dropdown-menu header-search dropdown-menu-start">
                    <div className="input-group w-100 p-2">
                    <input type="text" className="form-control" placeholder="Search...."/>
                    <div className="input-group-text btn btn-primary">
                    <i className="fe fe-search" aria-hidden="true"></i>
                    </div>
                    </div>
                    </div>
                    </div>
               
                    <button className="navbar-toggler navresponsive-toggler d-lg-none ms-auto" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-4"
                    aria-controls="navbarSupportedContent-4" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon fe fe-more-vertical"></span>
                    </button>
                    <div className="navbar navbar-collapse responsive-navbar p-0">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                    <div className="d-flex order-lg-2">
                    <div className="dropdown d-lg-none d-flex">
                    <a href="javascript:void(0)" className="nav-link icon" data-bs-toggle="dropdown">
                        <i className="fe fe-search"></i>
                    </a>
                    <div className="dropdown-menu header-search dropdown-menu-start">
                        <div className="input-group w-100 p-2">
                            <input type="text" className="form-control" placeholder="Search...."/>
                            <div className="input-group-text btn btn-primary">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="d-flex country">
                    <a className="nav-link icon text-center" data-bs-target="#country-selector"
                        data-bs-toggle="modal">
                        <i className="fe fe-globe"></i><span
                            className="fs-16 ms-2 d-none d-xl-block">English</span>
                    </a>
                    </div>
              
                    <div className="d-flex country">
                    <a className="nav-link icon theme-layout nav-link-bg layout-setting">
                        <span className="dark-layout"><i className="fe fe-moon"></i></span>
                        <span className="light-layout"><i className="fe fe-sun"></i></span>
                    </a>
                    </div>
                    
                    <div className="dropdown  d-flex shopping-cart">
                    <a className="nav-link icon text-center" data-bs-toggle="dropdown">
                        <i className="fe fe-shopping-cart"></i><span className="badge bg-secondary header-badge">4</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <div className="drop-heading border-bottom">
                            <div className="d-flex">
                                <h6 className="mt-1 mb-0 fs-16 fw-semibold text-dark"> My Shopping Cart</h6>
                                <div className="ms-auto">
                                    <span className="badge bg-danger-transparent header-badge text-danger fs-14">Hurry Up!</span>
                                </div>
                            </div>
                        </div>
                        <div className="header-dropdown-list message-menu">
                            <div className="dropdown-item d-flex p-4">
                                <a href="cart.html" className="open-file"></a>
                                <span
                                    className="avatar avatar-xl br-5 me-3 align-self-center cover-image"
                                    data-bs-image-src="assets/images/pngs/4.jpg"></span>
                                <div className="wd-50p">
                                    <h5 className="mb-1">Flower Pot for Home Decor</h5>
                                    <span>Status: <span className="text-success">In Stock</span></span>
                                    <p className="fs-13 text-muted mb-0">Quantity: 01</p>
                                </div>
                                <div className="ms-auto text-end d-flex fs-16">
                                    <span className="fs-16 text-dark d-none d-sm-block px-4">
                                        $438
                                    </span>
                                    <a href="javascript:void(0)" className="fs-16 btn p-0 cart-trash">
                                        <i className="fe fe-trash-2 border text-danger brround d-block p-2"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="dropdown-item d-flex p-4">
                                <a href="cart.html" className="open-file"></a>
                                <span
                                    className="avatar avatar-xl br-5 me-3 align-self-center cover-image"
                                    data-bs-image-src="assets/images/pngs/6.jpg"></span>
                                <div className="wd-50p">
                                    <h5 className="mb-1">Black Digital Camera</h5>
                                    <span>Status: <span className="text-danger">Out Stock</span></span>
                                    <p className="fs-13 text-muted mb-0">Quantity: 06</p>
                                </div>
                                <div className="ms-auto text-end d-flex">
                                    <span className="fs-16 text-dark d-none d-sm-block px-4">
                                        $867
                                    </span>
                                    <a href="javascript:void(0)" className="fs-16 btn p-0 cart-trash">
                                        <i className="fe fe-trash-2 border text-danger brround d-block p-2"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="dropdown-item d-flex p-4">
                                <a href="cart.html" className="open-file"></a>
                                <span
                                    className="avatar avatar-xl br-5 me-3 align-self-center cover-image"
                                    data-bs-image-src="assets/images/pngs/8.jpg"></span>
                                <div className="wd-50p">
                                    <h5 className="mb-1">Stylish Rockerz 255 Ear Pods</h5>
                                    <span>Status: <span className="text-success">In Stock</span></span>
                                    <p className="fs-13 text-muted mb-0">Quantity: 05</p>
                                </div>
                                <div className="ms-auto text-end d-flex">
                                    <span className="fs-16 text-dark d-none d-sm-block px-4">
                                        $323
                                    </span>
                                    <a href="javascript:void(0)" className="fs-16 btn p-0 cart-trash">
                                        <i className="fe fe-trash-2 border text-danger brround d-block p-2"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="dropdown-item d-flex p-4">
                                <a href="cart.html" className="open-file"></a>
                                <span
                                    className="avatar avatar-xl br-5 me-3 align-self-center cover-image"
                                    data-bs-image-src="assets/images/pngs/1.jpg"></span>
                                <div className="wd-50p">
                                    <h5 className="mb-1">Women Party Wear Dress</h5>
                                    <span>Status: <span className="text-success">In Stock</span></span>
                                    <p className="fs-13 text-muted mb-0">Quantity: 05</p>
                                </div>
                                <div className="ms-auto text-end d-flex">
                                    <span className="fs-16 text-dark d-none d-sm-block px-4">
                                        $867
                                    </span>
                                    <a href="javascript:void(0)" className="fs-16 btn p-0 cart-trash">
                                        <i className="fe fe-trash-2 border text-danger brround d-block p-2"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="dropdown-item d-flex p-4">
                                <a href="cart.html" className="open-file"></a>
                                <span
                                    className="avatar avatar-xl br-5 me-3 align-self-center cover-image"
                                    data-bs-image-src="assets/images/pngs/3.jpg"></span>
                                <div className="wd-50p">
                                    <h5 className="mb-1">Running Shoes for men</h5>
                                    <span>Status: <span className="text-success">In Stock</span></span>
                                    <p className="fs-13 text-muted mb-0">Quantity: 05</p>
                                </div>
                                <div className="ms-auto text-end d-flex">
                                    <span className="fs-16 text-dark d-none d-sm-block px-4">
                                        $456
                                    </span>
                                    <a href="javascript:void(0)" className="fs-16 btn p-0 cart-trash">
                                        <i className="fe fe-trash-2 border text-danger brround d-block p-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown-divider m-0"></div>
                        <div className="dropdown-footer">
                            <a className="btn btn-primary btn-pill w-sm btn-sm py-2" href="checkout.html"><i className="fe fe-check-circle"></i> Checkout</a>
                            <span className="float-end p-2 fs-17 fw-semibold">Total: $6789</span>
                        </div>
                    </div>
                    </div>
            
                    <div className="dropdown d-flex">
                    <a className="nav-link icon full-screen-link nav-link-bg">
                        <i className="fe fe-minimize fullscreen-button"></i>
                    </a>
                    </div>
           
                    <div className="dropdown  d-flex notifications">
                    <a className="nav-link icon" data-bs-toggle="dropdown"><i
                            className="fe fe-bell"></i><span className=" pulse"></span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <div className="drop-heading border-bottom">
                            <div className="d-flex">
                                <h6 className="mt-1 mb-0 fs-16 fw-semibold text-dark">Notifications
                                </h6>
                            </div>
                        </div>
                        <div className="notifications-menu">
                            <a className="dropdown-item d-flex" href="notify-list.html">
                                <div className="me-3 notifyimg  bg-primary brround box-shadow-primary">
                                    <i className="fe fe-mail"></i>
                                </div>
                                <div className="mt-1 wd-80p">
                                    <h5 className="notification-label mb-1">New Application received
                                    </h5>
                                    <span className="notification-subtext">3 days ago</span>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex" href="notify-list.html">
                                <div className="me-3 notifyimg  bg-secondary brround box-shadow-secondary">
                                    <i className="fe fe-check-circle"></i>
                                </div>
                                <div className="mt-1 wd-80p">
                                    <h5 className="notification-label mb-1">Project has been
                                        approved</h5>
                                    <span className="notification-subtext">2 hours ago</span>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex" href="notify-list.html">
                                <div className="me-3 notifyimg  bg-success brround box-shadow-success">
                                    <i className="fe fe-shopping-cart"></i>
                                </div>
                                <div className="mt-1 wd-80p">
                                    <h5 className="notification-label mb-1">Your Product Delivered
                                    </h5>
                                    <span className="notification-subtext">30 min ago</span>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex" href="notify-list.html">
                                <div className="me-3 notifyimg bg-pink brround box-shadow-pink">
                                    <i className="fe fe-user-plus"></i>
                                </div>
                                <div className="mt-1 wd-80p">
                                    <h5 className="notification-label mb-1">Friend Requests</h5>
                                    <span className="notification-subtext">1 day ago</span>
                                </div>
                            </a>
                        </div>
                        <div className="dropdown-divider m-0"></div>
                        <a href="notify-list.html"
                            className="dropdown-item text-center p-3 text-muted">View all
                            Notification</a>
                    </div>
                    </div>
              
                    <div className="dropdown  d-flex message">
                    <a className="nav-link icon text-center" data-bs-toggle="dropdown">
                        <i className="fe fe-message-square"></i><span className="pulse-danger"></span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <div className="drop-heading border-bottom">
                            <div className="d-flex">
                                <h6 className="mt-1 mb-0 fs-16 fw-semibold text-dark">You have 5
                                    Messages</h6>
                                <div className="ms-auto">
                                    <a href="javascript:void(0)" className="text-muted p-0 fs-12">make all unread</a>
                                </div>
                            </div>
                        </div>
                        <div className="message-menu message-menu-scroll">
                            <a className="dropdown-item d-flex" href="chat.html">
                                <span
                                    className="avatar avatar-md brround me-3 align-self-center cover-image"
                                    data-bs-image-src="assets/images/users/1.jpg"></span>
                                <div className="wd-90p">
                                    <div className="d-flex">
                                        <h5 className="mb-1">Peter Theil</h5>
                                        <small className="text-muted ms-auto text-end">
                                            6:45 am
                                        </small>
                                    </div>
                                    <span>Commented on file Guest list....</span>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex" href="chat.html">
                                <span
                                    className="avatar avatar-md brround me-3 align-self-center cover-image"
                                    data-bs-image-src="assets/images/users/15.jpg"></span>
                                <div className="wd-90p">
                                    <div className="d-flex">
                                        <h5 className="mb-1">Abagael Luth</h5>
                                        <small className="text-muted ms-auto text-end">
                                            10:35 am
                                        </small>
                                    </div>
                                    <span>New Meetup Started......</span>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex" href="chat.html">
                                <span
                                    className="avatar avatar-md brround me-3 align-self-center cover-image"
                                    data-bs-image-src="assets/images/users/12.jpg"></span>
                                <div className="wd-90p">
                                    <div className="d-flex">
                                        <h5 className="mb-1">Brizid Dawson</h5>
                                        <small className="text-muted ms-auto text-end">
                                            2:17 pm
                                        </small>
                                    </div>
                                    <span>Brizid is in the Warehouse...</span>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex" href="chat.html">
                                <span
                                    className="avatar avatar-md brround me-3 align-self-center cover-image"
                                    data-bs-image-src="assets/images/users/4.jpg"></span>
                                <div className="wd-90p">
                                    <div className="d-flex">
                                        <h5 className="mb-1">Shannon Shaw</h5>
                                        <small className="text-muted ms-auto text-end">
                                            7:55 pm
                                        </small>
                                    </div>
                                    <span>New Product Realease......</span>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex" href="chat.html">
                                <span
                                    className="avatar avatar-md brround me-3 align-self-center cover-image"
                                    data-bs-image-src="assets/images/users/3.jpg"></span>
                                <div className="wd-90p">
                                    <div className="d-flex">
                                        <h5 className="mb-1">Cherry Blossom</h5>
                                        <small className="text-muted ms-auto text-end">
                                            7:55 pm
                                        </small>
                                    </div>
                                    <span>You have appointment on......</span>
                                </div>
                            </a>

                        </div>
                        <div className="dropdown-divider m-0"></div>
                        <a href="javascript:void(0)" className="dropdown-item text-center p-3 text-muted">See all
                            Messages</a>
                    </div>
                    </div>

                    <div className="dropdown d-flex header-settings">
                    <a href="javascript:void(0);" className="nav-link icon"
                        data-bs-toggle="sidebar-right" data-target=".sidebar-right">
                        <i className="fe fe-align-right"></i>
                    </a>
                    </div>

                    <div className="dropdown d-flex profile-1">
                    <a href="javascript:void(0)" data-bs-toggle="dropdown" className="nav-link leading-none d-flex">
                        <img src="assets/images/users/21.jpg" alt="profile-user"
                            className="avatar  profile-user brround cover-image"/>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <div className="drop-heading">
                            <div className="text-center">
                                <h5 className="text-dark mb-0 fs-14 fw-semibold">Percy Kewshun</h5>
                                <small className="text-muted">Senior Admin</small>
                            </div>
                        </div>
                        <div className="dropdown-divider m-0"></div>
                        <a className="dropdown-item" href="profile.html">
                            <i className="dropdown-icon fe fe-user"></i> Profile
                        </a>
                        <a className="dropdown-item" href="email-inbox.html">
                            <i className="dropdown-icon fe fe-mail"></i> Inbox
                            <span className="badge bg-danger rounded-pill float-end">5</span>
                        </a>
                        <a className="dropdown-item" href="lockscreen.html">
                            <i className="dropdown-icon fe fe-lock"></i> Lockscreen
                        </a>
                        <a className="dropdown-item" href="login.html">
                            <i className="dropdown-icon fe fe-alert-circle"></i> Sign out
                        </a>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>

    </>
    );
    }

    export default Header;