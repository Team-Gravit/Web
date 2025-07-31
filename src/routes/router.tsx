// src/main.tsx
import { createBrowserRouter } from 'react-router-dom';

import Root from './Root';
import MainPage from '../pages/MainPage';
import UserPage from '../pages/UserPage';
import StudyPage from '../pages/StudyPage';
import LeaguePage from '../pages/LeaguePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { index: true, element: <MainPage /> },
            { path: 'user', element: <UserPage /> },
            { path: 'study', element: <StudyPage /> },
            { path: 'league', element: <LeaguePage /> },
        ],
    },
]);

export default router;
