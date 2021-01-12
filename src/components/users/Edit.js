import React, { useState } from 'react'
import axios from "axios";
import { useHistory ,useParams} from 'react-router-dom'

const Edit = () => {
    const history = useHistory();
    const {id} = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",


    });
    const { name,username,email,phone,website } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onformSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3003/user/"+id, user);
            history.push('/')
        } catch (e) {
            console.log(e);
        }
    }

    const loadUser =()=>{

    }
    return (
        <div>
            <form noValidate onSubmit={e => onformSubmit(e)} action="" className="w-75 p-3 m-auto bg-info rounded">
                <h3>Edit User</h3>

                <div className="form-group">
                    <input name="name" onChange={e => onInputChange(e)} type="text" className="form-control" placeholder="Enter a name" value={name} />
                </div>
                <div className="form-group">
                    <input name="username" onChange={e => onInputChange(e)} type="text" className="form-control" placeholder="Enter a username" value={username} />
                </div>

                <div className="form-group">
                    <input name="email" onChange={e => onInputChange(e)} type="email" className="form-control" placeholder="Enter a email" value={email} />
                </div>

                <div className="form-group">
                    <input name="phone" onChange={e => onInputChange(e)} type="text" className="form-control" placeholder="Enter a phone" value={phone} />
                </div>

                <div className="form-group">
                    <input name="website" onChange={e => onInputChange(e)} type="text" className="form-control" placeholder="Enter a web site" value={website} />
                </div>


                <button className="btn btn-outline-dark my-3">submit</button>
            </form>
        </div>
    )
}

export default Edit
