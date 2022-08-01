import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const photoUrl = 'https://cdn-icons-png.flaticon.com/512/149/149071.png';

    const menuItems =
        <>
            <li><Link to='/' href="#2">Home</Link></li>
            <li><Link to='/addUser' >Add User</Link></li>
            {/* <li><Link to='/completed-task' href="#2">Completed Task</Link></li> */}
            {/* <li><Link to='login' >Login</Link></li> */}

            <span className="flex items-center text-text ">
                <span> <img style={{
                    height: '40px',
                    width: 'auto',
                    objectFit: 'contain',
                    borderRadius: '50%',
                    paddingLeft: '10px'
                }} src={photoUrl} alt="" />  </span>
            </span>
        </>

    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span class="ml-3 text-xl">Tailblocks</span>
                </a>
                <nav styles={{ listStyle: 'none' }} class="md:ml-auto  selection: flex flex-wrap items-center text-base justify-center">
                    {menuItems}
                </nav>

            </div>
        </header>
    );
};

export default Navbar;