import React, { useState } from 'react';

// Import your components
import Profile from './components/Profile';
import PropertyList from './components/PropertyList';
import Query from './components/Query';
import MyFavoriteLIst from './components/MyFavoriteLIst';
import { BsFilterLeft } from 'react-icons/bs';

const MyProfile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState('Profile'); // State for managing the active component

    // Toggle the menu when the button is clicked (for mobile)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close the menu after selecting an item (on mobile)
    const closeMenu = (componentName) => {
        setActiveComponent(componentName); // Update the active component
        setIsMenuOpen(false); // Close the menu on mobile
    };

    // Render the component based on the activeComponent state
    const renderActiveComponent = () => {
        switch (activeComponent) {
            case 'Profile':
                return <Profile />;
            case 'PropertyList':
                return <PropertyList />;
            case 'MyFavoriteList':
                return <MyFavoriteLIst />;
            case 'Query':
                return <Query />;
            default:
                return <Profile />;
        }
    };

    // Function to apply active styles dynamically
    const getMenuItemClass = (componentName) => {
        return activeComponent === componentName
            ? 'w-full px-4 py-2 text-left text-primary rounded-full bg-[#FDE8E9]' // Active styles
            : 'w-full px-4 py-2 text-left text-[#444955] hover:text-primary rounded-full hover:bg-[#FDE8E9]'; // Default styles
    };

    return (
        <div className='2xl:px-[300px] px-5'>
            <h2 className='py-4 text-2xl font-extrabold border-b text-secondary'>Account</h2>

            <div className="flex flex-col min-h-screen pt-0 md:pt-4 md:flex-row">

                <div
                    className={`fixed md:relative inset-y-0 left-0  bg-white w-64 md:w-52 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                        } md:translate-x-0 transition-transform duration-300 ease-in-out z-20 md:z-auto`}
                >
                    <ul className="flex flex-col p-4 space-y-4">
                        <li className='flex justify-end md:hidden'>
                            <button onClick={() => closeMenu('Profile')} className="p-1 border rounded-full cursor-pointer hover:btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                        </li>
                        <li>
                            <button
                                className={getMenuItemClass('Profile')} // Apply dynamic class
                                onClick={() => closeMenu('Profile')}
                            >
                                My Profile
                            </button>
                        </li>
                        <li>
                            <button
                                className={getMenuItemClass('PropertyList')} // Apply dynamic class
                                onClick={() => closeMenu('PropertyList')}
                            >
                                Property List
                            </button>
                        </li>
                        <li>
                            <button
                                className={getMenuItemClass('MyFavoriteList')} // Apply dynamic class
                                onClick={() => closeMenu('MyFavoriteList')}
                            >
                                My Favorite List
                            </button>
                        </li>
                        <li>
                            <button
                                className={getMenuItemClass('Query')} // Apply dynamic class
                                onClick={() => closeMenu('Query')}
                            >
                                Query
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Right-Side Main Content */}
                <div className="flex-grow md:mt-0 md:pl-10">
                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={toggleMenu}
                        className="p-1 my-1 text-3xl transform border rounded-lg shadow-md hover:text-primary hover:bg-[#FDE8E9] md:hidden"
                    >
                        <BsFilterLeft />
                    </button>

                    {/* Main Content Area */}
                    <div className="bg-white w-full md:max-w-[1056px] mx-auto md:border-l">
                        {renderActiveComponent()} {/* Renders the active component based on selection */}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyProfile;
