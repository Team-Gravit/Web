import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '@/assets/logo/main-logo.svg?react';

function LogoButton() {
    return (
        <Link to="/" aria-label="홈으로 이동" className="outline-none focus:outline-none">
            <LogoImg className="w-[102px] h-[32px]" title="logo" />
        </Link>
    );
}

export default LogoButton;
