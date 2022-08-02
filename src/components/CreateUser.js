import React from 'react';
import { useForm } from 'react-hook-form';
import './Styles.css'
import { toast } from 'react-toastify';
// import { refetch } from '@tanstack/react-query'

const CreateUser = () => {
    //Form Control & Submit
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = formInfo => {
        // formInfo.target.reset();
        const { fname, lname, email, mobile, role, state } = formInfo;

        const product = {
            First_Name: fname,
            Last_Name: lname,
            Email: email,
            Phone: mobile,
            Roles: role,
            State: state
        }
        console.log('product', product);
        const url = `http://localhost:5001/user/all`;

        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast('user added successfully')
                // refetch()
            });
        reset()

    }
    return (
        <div>
            <div className="py-5 font-bold text-center text-primary sm:text-2xl md:text-4xl lg:text-5xl">ADD User</div>

            <div className=' border-full flex justify-center items-center'>

                <form className=' bg-gray-100 px-10 py-4' onSubmit={handleSubmit(onSubmit)}>
                    {/* Input first Name */}
                    <div className="form-control w-full max-w-xs">
                        <input
                            type="text"
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
                            <span className="label-text">Role</span>
                        </label>
                        <select {...register("role")}>
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
                            <span className="label-text">State</span>
                        </label>
                        <select {...register("state", {
                            required: {
                                value: true,
                                message: 'Roles  is Required'
                            }
                        })}>
                            <option value="Current">Current</option>
                            <option value="Another">Another</option>
                        </select>
                        <label className="label">
                            {errors.state?.type === 'required' && <span className="label-text-alt text-red-500">{errors.state.message}</span>}
                        </label>
                    </div>



                    {/* Sbmit Button */}
                    <input className='border w-full bg-gray-500 p-2 max-w-xs text-red' type="submit" value="ADD USER" />
                </form>

            </div>
        </div>
    );
};

export default CreateUser;