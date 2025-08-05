// src/main.tsx
import { createBrowserRouter } from 'react-router-dom';

import MainPage from '../pages/MainPage';

import StudyPage from '../pages/StudyPage';
import LessonPage from '../pages/LessonPage';
import WithHeaderLayout from '../layouts/WithHeaderLayout';
import NoHeaderLayout from '../layouts/NoHeaderLayout';
import LoginPage from '../pages/LoginPage';
import SetInfoPage from '../pages/SetInfoPage';
import SuccessPage from '../pages/SuccessPage';
import UserPage from '../pages/UserPage';
import LeaguePage from '../pages/LeaguePage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <WithHeaderLayout />,
        children: [
            // 헤더 있는 페이지
            { index: true, element: <MainPage /> },
            { path: 'login', element: <LoginPage /> },
            { path: 'set-info', element: <SetInfoPage /> },
            { path: 'success', element: <SuccessPage /> },
            { path: 'user', element: <UserPage /> },
            { path: 'study', element: <StudyPage /> },
            { path: 'league', element: <LeaguePage /> },
        ],
    },
    {
        path: '/',
        element: <NoHeaderLayout />,
        children: [
            {
                path: 'lesson',
                element: <LessonPage />,
            },
        ],
    },
]);

export default router;
