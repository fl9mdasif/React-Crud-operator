import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify';

const Users = () => {

    const navigate = useNavigate()

    const { isLoading, error, data, refetch } = useQuery(['usersData'], () =>
        fetch('http://localhost:5001/user/all').then(res =>
            res.json()
        ))
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message


    //delete user
    const deleteUser = (id) => {
        const proceed = window.confirm('Are you sure to delete user');
        if (proceed) {
            const url = `http://localhost:5001/user/all/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // alert('Delete')
                    toast('deleted')
                    refetch()
                })
        }
    };

    const updateUser = (id) => {
        const proceed = window.confirm('Are you sure to update user ');
        if (proceed) {
            navigate(`/update/${id}`)
            // refetch()

        }
    };

    return (
        <div>
            <div className=" py-10 font-bold text-center text-primary sm:text-2xl md:text-4xl lg:text-5xl">All USERS</div>
            <div className=" pt-6 bg-gray-100 fle items-center justify-center">
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
                            data.map((a, index) =>
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
                                </tr>
                            )
                        }


                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default Users;