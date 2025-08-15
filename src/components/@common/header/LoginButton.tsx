import React from 'react';

import { Link } from 'react-router-dom';

export default function LoginButton() {
    return (
        <Link to="/" className="font-bold text-gray-500 text-xl cursor-pointer">
            로그인
        </Link>
    );
}
