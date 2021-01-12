import React, { useState,useEffect } from 'react'
import { useParams ,useHistory} from 'react-router-dom'
import axios from 'axios'
const User = () => {
    const { id } = useParams();
    const history = useHistory();
    useEffect(()=>{
        loadUser();
    },[])

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    })

    const { name, username, email, phone, website } = user;

    const onInputChange = async (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const loadUser= async()=>{
        const result = await axios.get(`http://localhost:3003/user/${id}`)
        setUser(result.data);
    }

    const onformSubmit = async(e) => {
        e.preventDefault();
        history.push('/');
        
    }
    return (
        <div>

            <form noValidate onSubmit={e => onformSubmit(e)} action="" className="w-75 p-3 m-auto bg-info rounded">
                <h3>View User</h3>

                <div className="form-group">
                    <input  name="name" onChange={e => onInputChange(e)} type="text" className="form-control my-2" placeholder="Enter a name" value={name} />
                </div>
                <div className="form-group">
                    <input name="username" onChange={e => onInputChange(e)} type="text" className="form-control my-2" placeholder="Enter a username" value={username} />
                </div>

                <div className="form-group">
                    <input name="email" onChange={e => onInputChange(e)} type="email" className="form-control my-2" placeholder="Enter a email" value={email} />
                </div>

                <div className="form-group">
                    <input name="phone" onChange={e => onInputChange(e)} type="text" className="form-control my-2" placeholder="Enter a phone" value={phone} />
                </div>

                <div className="form-group">
                    <input name="website" onChange={e => onInputChange(e)} type="text" className="form-control my-2" placeholder="Enter a web site" value={website} />
                </div>


                <button className="btn btn-outline-dark my-3">submit</button>
            </form>
        </div>
    )
}


export default User;