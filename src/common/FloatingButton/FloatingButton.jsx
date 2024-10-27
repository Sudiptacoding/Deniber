// FloatingButton.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FloatingButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed flex flex-col items-end bottom-6 right-6">
            {isOpen && (
                <div className="p-3 mb-2 space-y-2 bg-white rounded-lg shadow-lg">
                    <Link to="/login" className="block text-gray-700 hover:text-blue-600">
                        Login
                    </Link>
                    <Link to="/registration" className="block text-gray-700 hover:text-blue-600">
                        Registration
                    </Link>
                    <Link to="/addproperty" className="block text-gray-700 hover:text-blue-600">
                        Add Property
                    </Link>
                    <Link to="/myprofile" className="block text-gray-700 hover:text-blue-600">
                        My Profile
                    </Link>
                    <Link to="/propertydetails" className="block text-gray-700 hover:text-blue-600">
                        Property Details
                    </Link>
                    <Link to="/searchresult" className="block text-gray-700 hover:text-blue-600">
                        Search Result
                    </Link>
                </div>
            )}
            <button
                onClick={toggleMenu}
                className="p-4 text-white bg-blue-500 rounded-full shadow-lg focus:outline-none"
            >
                {isOpen ? <svg
                    className="fill-current swap-on"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512">
                    <polygon
                        points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
                    : <svg
                        className="fill-current swap-off"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512">
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>}
            </button>

        </div>
    );
};

export default FloatingButton;
