import React,{useState} from "react";

function UserList()
{

    const userlist = [
    
        {fname:"Bella",lname:"Chloe",position:"System Devloper",date:"20/02/2022",salary:"20000",email:"xyz@gmail.com"},
        {fname:"Bella",lname:"Chloe",position:"System Devloper",date:"20/02/2022",salary:"20000",email:"xyz@gmail.com"},
        {fname:"Bella",lname:"Chloe",position:"System Devloper",date:"20/02/2022",salary:"20000",email:"xyz@gmail.com"}
    
    ];
    
    const[state,setState] = useState(userlist);

return(

<>

        <div className="main-content app-content mt-0">
                <div className="side-app">

                    <div className="main-container container-fluid">
                        <div className="page-header">
                            <h1 className="page-title">Data Table</h1>
                            <div>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="javascript:void(0)">Tables</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Data Table</li>
                                </ol>
                            </div>

                        </div>
<div className="row row-sm">
<div className="col-lg-12">
<div className="card">
<div className="card-header">
<h3 className="card-title">Responsive DataTable</h3>
</div>
<div className="card-body">
<div className="table-responsive">
    <table className="table table-bordered text-nowrap border-bottom" id="responsive-datatable">
        <thead>
            <tr>
                <th className="wd-15p border-bottom-0">First name</th>
                <th className="wd-15p border-bottom-0">Last name</th>
                <th className="wd-20p border-bottom-0">Position</th>
                <th className="wd-15p border-bottom-0">Start date</th>
                <th className="wd-10p border-bottom-0">Salary</th>
                <th className="wd-25p border-bottom-0">E-mail</th>
            </tr>
        </thead>
        <tbody>
        {state.map((item,index) => (
            <tr key={index}>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.position}</td>
                <td>{item.date}</td>
                <td>{item.salary}</td>
                <td>{item.email}</td>
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