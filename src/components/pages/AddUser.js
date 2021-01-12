import axios from 'axios';
import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

const Adduser = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        
    });
    const {name,username,email} = user;
    const onInputChange =(e)=>{
        // setUser({...user,[e.target.name]:e.target.value})
        setUser({...user,[e.target.name]:e.target.value})
    }
    // form submit event
    const onsubmitForm = async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:3003/user",user);
        history.push("/");
    }
    return (
        <div>
            <form onSubmit={e => onsubmitForm(e)} noValidate action="" className="w-50 m-auto">
                <h3 className="border-bottom">Add user</h3>
                <div className="form-group">
                    <label htmlFor="name">Enter name</label>
                    <input onChange={e => onInputChange(e)} value={name} name="name" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Enter Username</label>
                    <input  onChange={e => onInputChange(e)} value={username} name="username" type="text"  className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Enter Email</label>
                    <input  onChange={e => onInputChange(e)} value={email} name="email" type="email" className="form-control" />
                </div>
                <button className=" my-2 btn btn-outline-danger">Submit</button>
            </form>
        </div>
    )
}

export default Adduser
