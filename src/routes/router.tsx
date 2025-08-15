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
import PostOAuth from '../api/postOAuth';

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                element: <WithHeaderLayout />,
                children: [
                    { index: true, element: <LoginPage /> },
                    { path: 'set-info', element: <SetInfoPage /> },
                    { path: 'success', element: <SuccessPage /> },
                    { path: 'user', element: <UserPage /> },
                ],
            },
            {
                element: <WithHeaderLayout headerOverlay={true} />,
                children: [
                    { path: 'main', element: <MainPage /> },
                    { path: 'study', element: <StudyPage /> },
                    { path: 'league', element: <LeaguePage /> },
                ],
            },
            {
                element: <NoHeaderLayout />,
                children: [
                    {
                        path: 'lesson',
                        element: <LessonPage />,
                    },
                    { path: "/login/oauth2/code/:provider", element: <PostOAuth /> },
                ],
            },
        ],
    },
]);

export default router;