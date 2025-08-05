// src/main.tsx
import { createBrowserRouter } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import StudyPage from '../pages/StudyPage';
import LessonPage from '../pages/LessonPage';
import WithHeaderLayout from '../layouts/WithHeaderLayout';
import NoHeaderLayout from '../layouts/NoHeaderLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <WithHeaderLayout />,
        children: [
            // 헤더 있는 페이지
            { index: true, element: <MainPage /> },
            { path: 'study', element: <StudyPage /> },
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
