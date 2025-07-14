import React from 'react'
import { Outlet } from 'react-router-dom';
import LayoutHeader from '../Components/LayoutHeader';
import LayoutFooter from '../Components/LayoutFooter';

const Layout = () => {
    return (
        <div>
            <LayoutHeader/>
            <main>
                <Outlet />
            </main>
            <LayoutFooter/>
        </div>
    );
    };

export default Layout