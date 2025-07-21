import React from 'react';

import { Link } from 'react-router-dom';

export default function StartButton() {
    return (
        <Link to="/login" className="bg-main-2 font-bold text-white p-2 rounded-lg text-xl cursor-pointer">
            그래빗 시작하기
        </Link>
    );
}
