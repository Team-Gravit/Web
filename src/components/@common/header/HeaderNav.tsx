import { NavLink } from 'react-router-dom';

type MenuItem = {
    label: string;
    href: string;
};

const menus: MenuItem[] = [
    { label: '홈', href: '/' },
    { label: '학습', href: '/study' },
    { label: '리그', href: '/league' },
    { label: '사용자', href: '/user' },
];

export default function HeaderNav() {
    return (
        <nav className="flex flex-row justify-evenly w-[300px]">
            {menus.map((menu) => (
                <NavLink key={menu.href} to={menu.href} className="text-xl font-bold text-gray-500">
                    {menu.label}
                </NavLink>
            ))}
        </nav>
    );
}
