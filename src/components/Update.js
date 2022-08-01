// import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
// import { useQuery } from '@tanstack/react-query'

const Update = () => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { userId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5001/user/all/${userId}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [userId])


    // const { isLoading, error, data: users, refetch } = useQuery(['usersData', userId], () =>
    //     fetch(`http://localhost:5001/user/all/${userId}`).then(res =>
    //         res.json()
    //     )
    // )
    // // refetch()
    // if (isLoading) return 'Loading...'
    // if (error) return 'An error has occurred: ' + error.message


    const onSubmit = formInfo => {
        // formInfo.preventDefault()
        const { fname, lname, email, mobile, role, state } = formInfo;
        const user = {
            First_Name: fname,
            Last_Name: lname,
            Email: email,
            Phone: mobile,
            Roles: role,
            State: state
        }
        // console.log('product', user);

        const url = `http://localhost:5001/user/all/${userId}`;
        //put updateOne
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                // alert('updated')
                toast.success('Updated successfully')
                navigate('/')
            });

    }
    return (

        <div>
            <h1>update : {userId}</h1>
            <p>{users.First_Name}</p>
            <p>{users.Last_Name}</p>

            <div>
                <div className="py-10 font-bold text-center text-primary sm:text-2xl md:text-4xl lg:text-5xl">Update User</div>

                <div className='flex  justify-center items-center'>
                    <div className="card w-96 bg-primary shadow-xl">
                        <div className="card-body pb-9">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Input first Name */}
                                <div className="form-control w-full max-w-xs">
                                    <input
                                        type="text"
                                        defaultValue={users?.First_Name}
                                        placeholder="First Name"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("fname", {
                                            required: {
                                                value: true,
                                                message: 'First Name is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.fname?.type === 'required' && <span className="label-text-alt text-red-500">{errors.fname.message}</span>}
                                    </label>
                                </div>

                                {/* Input last name  */}
                                <div className="form-control w-full max-w-xs">
                                    <input
                                        defaultValue={users?.Last_Name}
                                        type="text"
                                        placeholder="Last Name"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("lname", {
                                            required: {
                                                value: true,
                                                message: 'last name  is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.lname?.type === 'required' && <span className="label-text-alt text-red-500">{errors.lname.message}</span>}
                                        {errors.lname?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.lname.message}</span>}
                                    </label>
                                </div>

                                {/* Input Email */}
                                <div className="form-control w-full max-w-xs">
                                    <input
                                        defaultValue={users.Email}

                                        type="email"
                                        placeholder="Your Email"
                                        // value={email}
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid Email'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    </label>
                                </div>

                                {/* Input mobile numbet*/}
                                <div className="form-control w-full max-w-xs">

                                    <input
                                        defaultValue={users.Phone}

                                        type="number"
                                        placeholder="Mobile Number"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("mobile", {
                                            required: {
                                                value: true,
                                                message: 'Mobile Number is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.mobile?.type === 'required' && <span className="label-text-alt text-red-500">{errors.mobile.message}</span>}
                                    </label>
                                </div>


                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Role : </span>
                                    </label>
                                    <select {...register("role", {
                                        required: {
                                            value: true,
                                            message: 'Role Number is Required'
                                        }
                                    })}>

                                        {/* <option value="owner">{users.Roles}</option> */}
                                        <option value="Owner">Owner</option>
                                        <option value="Driver">Driver</option>
                                        <option value="Employee">Employee</option>

                                    </select>
                                    <label className="label">
                                        {errors.role?.type === 'required' && <span className="label-text-alt text-red-500">{errors.role.message}</span>}
                                    </label>
                                </div>


                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">State : </span>
                                    </label>
                                    <select {...register("state", {
                                        required: {
                                            value: true,
                                            message: 'State  is Required'
                                        }
                                    })}>

                                        {/* <option value="Current">{users.State}</option> */}
                                        <option value="Current">Current</option>
                                        <option value="Another">Another</option>
                                    </select>
                                    <label className="label">
                                        {errors.state?.type === 'required' && <span className="label-text-alt text-red-500">{errors.state.message}</span>}
                                    </label>
                                </div>



                                {/* Sbmit Button */}
                                <input className='border pointer px-4 py-2 w-full max-w-xs bg-red-400' type="submit" value="Update User" />
                            </form>
                        </div>
                    </div>
                </div>
                {/* <ToastContainer></ToastContainer> */}
            </div>

        </div>
    );
};

export default Update;