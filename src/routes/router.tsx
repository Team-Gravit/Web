// src/main.tsx
import { createBrowserRouter } from 'react-router-dom';

import Root from './Root';
import MainPage from '../pages/MainPage';
import UserPage from '../pages/UserPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { index: true, element: <MainPage /> },
            { path: 'user', element: <UserPage /> },
        ],
    },
]);

export default router;
