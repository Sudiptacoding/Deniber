import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';


const Navbar = () => {
    const [name, setName] = useState('');
    const imageUrl = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            localStorage.setItem('name', name);
            localStorage.setItem('imageUrl', imageUrl);
            document.getElementById('my_modal_3').close()
            toast.success('Successfully logged in! Please reload the page.');
        } else {
            alert('Please enter a name');
        }
    };

    const handelLogOut = () => {
        localStorage.removeItem('name')
        localStorage.removeItem('imageUrl')
        toast.success('Logged out successfully! Please reload the page.');
    }


    return (
        <div className="navbar bg-base-100 2xl:px-[300px] px-5 justify-around py-2">
            <div className="navbar-start lg:w-[18%] xl:w-[30%]">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Buy</a></li>
                        <li><a>Rent</a></li>
                        <li><a>Service</a></li>
                    </ul>
                </div>
                <a className=""><img className='w-36' src={logo} alt="logo" /></a>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="gap-10 px-1 menu menu-horizontal">
                    <NavLink><a className='p-2 text-common'>Buy</a></NavLink>
                    <NavLink><a className='p-2 text-common'>Rent</a></NavLink>
                    <NavLink><a className='p-2 text-common'>Service</a></NavLink>
                </ul>
            </div>
            <div className="items-center gap-4 navbar-end">
                {/* Large screens */}
                <div className="hidden gap-4 lg:flex">
                    {localStorage.getItem('name') && localStorage.getItem('imageUrl') ? (
                        <div className="relative flex items-center gap-4">
                            <img
                                src={localStorage.getItem('imageUrl')}
                                alt="Profile"
                                className="w-10 h-10 rounded-full"
                            />
                            <span>{localStorage.getItem('name')}</span>
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu rounded-box bg-base-100 z-[1] mt-3 w-52 p-2 shadow">
                                    <li onClick={() => handelLogOut()}><a>Logout</a></li>
                                    {/* <li><a onClick={handleLogout}>Logout</a></li> */}
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div onClick={() => document.getElementById('my_modal_3').showModal()} className="px-8 py-4 text-base font-extrabold border border-white rounded-lg cursor-pointer text-secondary hover:border-secondary font-customFont">
                            Login/Registration
                        </div>
                    )}
                    <div className="px-6 py-4 font-extrabold border rounded-lg cursor-pointer text-primary border-primary">
                        Sale/Rent Your Property
                    </div>
                </div>

                {/* Mobile screens */}
                <div className="flex-none lg:hidden">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://i.postimg.cc/JnV70J98/Untitled-1.png" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Demo 1</a></li>
                            <li><a>Demo 2</a></li>
                            <li><a>Demo 3</a></li>
                            <li><a>Demo 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                    </form>
                    <div className="flex items-center justify-center ">
                        <form onSubmit={handleSubmit} className="w-full max-w-sm p-6 text-center "                        >
                            <img
                                src={imageUrl}
                                alt="Profile"
                                className="object-cover w-24 h-24 mx-auto mb-4 rounded-full"
                            />
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-700">
                                    Enter Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    placeholder="Your name"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Navbar;

