import { NavLink } from 'react-router-dom';

type MenuItem = {
    label: string;
    href: string;
};

const menus: MenuItem[] = [
    { label: '홈', href: '/main' },
    { label: '학습', href: '/study' },
    { label: '리그', href: '/league' },
    { label: '사용자', href: '/user' },
];

type HeaderNavProps = {
    isDisabled?: boolean;
};

export default function HeaderNav({ isDisabled = false }: HeaderNavProps) {
    return (
        <nav className="flex flex-row justify-evenly w-[300px]">
            {menus.map((menu) => (
                <NavLink
                    key={menu.href}
                    to={menu.href}
                    className={() =>
                        `text-xl font-bold text-gray-500 ${isDisabled ? 'pointer-events-none select-none' : ''} }`
                    }
                    tabIndex={isDisabled ? -1 : 0} 
                    aria-disabled={isDisabled} 
                >
                    {menu.label}
                </NavLink>
            ))}
        </nav>
    );
}
