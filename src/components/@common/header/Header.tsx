import React from 'react';
import LogoButton from './LogoButton';
import LoginButton from './LoginButton';
import HeaderNav from './HeaderNav';
import StartButton from './StartButton';

function Header() {
    return (
        <header className="fixed w-full z-100 mx-auto my-0 px-8 py-4 flex items-center justify-center box-border bg-white h-[var(--header-height)]">
            <div className="flex flex-row flex-nowrap justify-between items-center w-full">
                <div className="flex flex-row gap-2.5 items-center">
                    <LogoButton />
                    <HeaderNav />
                </div>

                <div className="flex flex-row gap-3 items-center">
                    <LoginButton />
                    <StartButton />
                </div>
            </div>
        </header>
    );
}

export default Header;
