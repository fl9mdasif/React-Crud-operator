import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Users = () => {
    // const { userId } = useParams();
    const navigate = useNavigate()
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5001/user/all`)
            .then(res => res.json())
            .then(data => setUsers(data));

    }, []);

    const updateUser = (id) => {
        const proceed = window.confirm('Are you sure to delete product');
        if (proceed) {
            const url = `http://localhost:5001/user/all/${id}`;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })

            navigate(`/update/${id}`)
        }
    };


    //delete user
    const deleteUser = (id) => {
        const proceed = window.confirm('Are you sure to delete product');
        if (proceed) {
            const url = `http://localhost:5001/user/all/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    window.location.reload();
                    alert('user deleted successfully')
                })
        }
    };

    return (
        <div>
            <div className=" py-10 font-bold text-center text-primary sm:text-2xl md:text-4xl lg:text-5xl">All USERS</div>
            <div className=" pt-6 bg-gray-100 flex items-center justify-center">
                <table class="table border w-full">
                    <thead>
                        <tr >
                            <th>No</th>
                            <th>F.Name</th>
                            <th>L.name</th>
                            <th>Email </th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th>State</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            users.map((a, index) =>
                                <tr className="border ">
                                    <td>{index + 1}</td>
                                    <td>{a.First_Name}</td>
                                    <td>{a.Last_Name}</td>
                                    <td>{a.Email}</td>
                                    <td>{a.Phone} </td>
                                    <td>{a.Roles} </td>
                                    <td>{a.State} </td>

                                    <td><button onClick={() => updateUser(a._id)} className='btn px-3 py-1 bg-green-600 btn-xs text-white '><box-icon color='white' type='solid' size='' name='pencil'></box-icon></button>
                                        <button onClick={() => deleteUser(a._id)} className='btn px-3 py-1 bg-white btn-xs '><box-icon color='red' name='trash-alt'></box-icon></button></td>
                                </tr>)
                        }


                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default Users;