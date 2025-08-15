import { Outlet } from 'react-router-dom';
import Header from '../components/@common/header/Header';
import ScrollToTop from '../components/@common/scroll/ScrollToTop';

function WithHeaderLayout({ headerOverlay = false }) {
    return (
        <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <Header />
            <main className={`flex-grow ${headerOverlay ? '' : 'pt-[var(--header-height)]'}`}>
                <Outlet />
            </main>
        </div>
    );
}

export default WithHeaderLayout;
