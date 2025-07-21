import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/@common/header/Header';

function Root() {
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

export default Root;
