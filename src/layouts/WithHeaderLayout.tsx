import React from 'react';
import Header from '../components/@common/header/Header';
import { Outlet } from 'react-router-dom';

function WithHeaderLayout() {
    return (
        <div className="flex flex-col h-full">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default WithHeaderLayout;
