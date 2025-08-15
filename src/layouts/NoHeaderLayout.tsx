import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/@common/scroll/ScrollToTop';

function NoHeaderLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <Outlet />
        </div>
    );
}

export default NoHeaderLayout;
