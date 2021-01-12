import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
const Home = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        postUser()
    }, [])

    const postUser = async () => {
        const result = await axios.get("http://localhost:3003/user");
        setUser(result.data.reverse())
    }
    return (

        <div className="mt-2">
            <h2 className="text-center text-info bg-dark p-2">user data</h2>
            <table class="table table-dark w-75  m-3 ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Web site</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody className="table-light">

                    {
                        user.map((person, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{person.name}</td>
                                <td>{person.username}</td>
                                <td>{person.email}</td>
                                <td>{person.phone}</td>
                                <td>{person.website}</td>
                                <td>
                                <Link className="btn btn-danger" to="/user/edit">Edit</Link>
                                <Link className="btn btn-info">Update</Link>
                                <Link className="btn btn-success">del</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home
