import React from 'react';

const User = ({ a }) => {

    const manageProductToDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete product');
        if (proceed) {
            const url = `https://fast-fjord-70405.herokuapp.com/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    //const remaining = orders.filter(order => order._id !== id)
                    // setUsers(data)
                    // toast('product deleted from ALL order');
                })
        }
    };
    return (
        <div>
            <tr>
                {/* <th>{index + 1}</th> */}
                <td>{a.First_Name}</td>
                <td>{a.Last_Name}</td>
                <td>{a.Email}</td>
                <td>{a.Phone} </td>
                <td>{a.Roles} </td>
                <td>{a.State} </td>

                {/* <td>
                                {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-secondary'>pay</button></Link>}
                                {(a.price && a.paid) && <div>
                                    <p><span className='text-success'>Paid</span></p>
                                    <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                </div>}
                            </td> */}
                <td><button onClick={() => manageProductToDelete(a._id)} className='btn btn-xs text-white bg-red-600'>Delete</button></td>
            </tr>
        </div>
    );
};

export default User;