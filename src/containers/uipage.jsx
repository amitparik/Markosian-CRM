import React,{useState} from "react";
import Button from '../components/UI/button';
import Input from '../components/UI/input';

function UIPage()
{

    const handleChange=(event)=>{

        
    }

    const handleSubmit=(event)=> {

        event.preventDefault();

        alert('You Clicked a butotn!');

    }
return(
<>
<div className="main-content app-content mt-0">
                <div className="side-app">

                    <div className="main-container container-fluid">

<div className="row row-sm">
<div className="col-lg-12">
<div className="card">
<div className="card-header">
<h3 className="card-title">UI Input fields</h3>
</div>
<div className="card-body">
  
    <Button className='form-control btn btn-sm btn-danger' name='submit' title='Submit'  onClick={(event) => handleSubmit(event)}/>
    <Input className='form-control' name='fname'  onChange={(event) => handleChange(event)} placeholder='Enter Firstname'/>
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

export default UIPage;