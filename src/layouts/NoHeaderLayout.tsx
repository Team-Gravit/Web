import React from 'react';
import { Outlet } from 'react-router-dom';

function NoHeaderLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Outlet />
        </div>
    );
}

export default NoHeaderLayout;
