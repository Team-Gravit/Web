// src/main.tsx
import { createBrowserRouter } from 'react-router-dom';

import Root from './Root';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import SetInfoPage from '../pages/SetInfoPage';
import SuccessPage from '../pages/SuccessPage';
import UserPage from '../pages/UserPage';
import StudyPage from '../pages/StudyPage';
import LeaguePage from '../pages/LeaguePage';
import PostOAuth from '../api/PostOAuth';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { index: true, element: <MainPage /> },
            { path: 'login', element: <LoginPage /> },
            { path: 'set-info', element: <SetInfoPage /> },
            { path: 'success', element: <SuccessPage /> },
            { path: 'user', element: <UserPage /> },
            { path: 'study', element: <StudyPage /> },
            { path: 'league', element: <LeaguePage /> },
            { path: "/login/oauth2/code/:provider", element: <PostOAuth /> },
        ],
    },
]);

export default router;
