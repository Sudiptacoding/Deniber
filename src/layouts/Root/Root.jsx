import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../common/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FloatingButton from '../../common/FloatingButton/FloatingButton';

const Root = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <FloatingButton></FloatingButton>
        </div>
    );
};

export default Root;