import React,{useState} from "react";

function UserList()
{

const initState = [
{ name: "Emma", email: 'xyz@gmail.com', role: "Admin",login:'20.00 hrs' ,joined_date:'2022/02/02'}
];


  const [state, setState] = useState(initState);

return(
<>


<div className="d-flex flex-column flex-root">

<div className="page d-flex flex-row flex-column-fluid">

<div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
<div className="content d-flex flex-column flex-column-fluid" id="kt_content">
    
    <div className="post d-flex flex-column-fluid" id="kt_post">
    
        <div id="kt_content_container" className="container-xxl">
            
            <div className="card">
            
                <div className="card-body pt-0">
                
                    <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users">
                        
                        <thead>
                        
                            <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                <th className="w-10px pe-2">
                                    <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                        <input className="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_table_users .form-check-input" value="1" />
                                    </div>
                                </th>
                                <th className="min-w-125px">User</th>
                                <th className="min-w-125px">Role</th>
                                <th className="min-w-125px">Last login</th>
                                <th className="min-w-125px">Joined Date</th>
                                <th className="text-end min-w-100px">Actions</th>
                            </tr>
                        
                        </thead>
                    
                        <tbody className="text-gray-600 fw-bold">
                        
                        {state.map((item) => (
                            <tr>
                            
                                <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                        <input className="form-check-input" type="checkbox" value="1" />
                                    </div>
                                </td>
                               
                                <td className="d-flex align-items-center">
                                    
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                        <a href="../../demo1/dist/apps/user-management/users/view.html">
                                            <div className="symbol-label">
                                                <img src="assets/media/avatars/150-1.jpg" alt="Emma Smith" className="w-100" />
                                            </div>
                                        </a>
                                    </div>
                                    
                                    <div className="d-flex flex-column">
                                        <a href="../../demo1/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">{item.name}</a>
                                        <span>{item.email}</span>
                                    </div>
                                
                                </td>
                        
                                <td>{item.role}</td>
                            
                                <td>
                                    <div className="badge badge-light fw-bolder">{item.login}</div>
                                </td>
                        
                                <td>{item.joined_date}</td>
                            
                                <td className="text-end">
                                    <a href="#" className="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                    
                                    <span className="svg-icon svg-icon-5 m-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="black" />
                                        </svg>
                                    </span>
                            </a>
                                    
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
                                
                                        <div className="menu-item px-3">
                                            <a href="../../demo1/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                                        </div>
                                    
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                                        </div>
                            
                                    </div>
                        
                                </td>
                            
                            </tr>
                                ))}
                        </tbody>
                        
                    </table>
                    
                </div>
                
            </div>
            
        </div>
    
    </div>

</div>

</div>

</div>

</div>
  
</>


)
}

export default UserList;