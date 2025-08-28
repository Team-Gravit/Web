import { createBrowserRouter } from 'react-router-dom';
import WithHeaderLayout from '../layouts/WithHeaderLayout';
import NoHeaderLayout from '../layouts/NoHeaderLayout';
import LoginPage from '../pages/LoginPage'; // 첫 페이지만 즉시 로딩
import { lazy, Suspense } from 'react';

// 모든 페이지를 lazy loading으로 변경
const MainPage = lazy(() => import('../pages/MainPage'));
const ChapterListPage = lazy(() => import('../pages/ChapterListPage'));
const LeaguePage = lazy(() => import('../pages/LeaguePage'));
const ProblemPage = lazy(() => import('../pages/ProblemPage'));
const ChapterDetailPage = lazy(() => import('../pages/ChapterDetailPage'));
const SetInfoPage = lazy(() => import('../pages/SetInfoPage'));
const SuccessPage = lazy(() => import('../pages/SuccessPage'));
const UserPage = lazy(() => import('../pages/UserPage'));
const PostOAuth = lazy(() => import('../api/PostOAuth'));

// 공통 로딩 컴포넌트
const PageLoader = () => (
    <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <p className="text-gray-600">페이지를 불러오는 중...</p>
        </div>
    </div>
);

// Suspense 래퍼 컴포넌트로 중복 제거
const LazyPage = ({ children }: { children: React.ReactNode }) => (
    <Suspense fallback={<PageLoader />}>{children}</Suspense>
);

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                element: <WithHeaderLayout />,
                children: [
                    { index: true, element: <LoginPage /> }, // 첫 페이지만 즉시 로딩

                    // 나머지는 모두 lazy loading
                    {
                        path: 'set-info',
                        element: (
                            <LazyPage>
                                <SetInfoPage />
                            </LazyPage>
                        ),
                    },
                    {
                        path: 'success',
                        element: (
                            <LazyPage>
                                <SuccessPage />
                            </LazyPage>
                        ),
                    },
                    {
                        path: 'user',
                        element: (
                            <LazyPage>
                                <UserPage />
                            </LazyPage>
                        ),
                    },
                    {
                        path: 'study/:chapterId',
                        element: (
                            <LazyPage>
                                <ChapterDetailPage />
                            </LazyPage>
                        ),
                    },
                ],
            },
            {
                element: <WithHeaderLayout headerOverlay={true} />,
                children: [
                    {
                        path: 'main',
                        element: (
                            <LazyPage>
                                <MainPage />
                            </LazyPage>
                        ),
                    },
                    {
                        path: 'study',
                        element: (
                            <LazyPage>
                                <ChapterListPage />
                            </LazyPage>
                        ),
                    },
                    {
                        path: 'league',
                        element: (
                            <LazyPage>
                                <LeaguePage />
                            </LazyPage>
                        ),
                    },
                    {
                        path: 'login/oauth2/code/:provider',
                        element: (
                            <LazyPage>
                                <PostOAuth />
                            </LazyPage>
                        ),
                    },
                ],
            },
            {
                element: <NoHeaderLayout />,
                children: [
                    {
                        path: 'lesson',
                        element: (
                            <LazyPage>
                                <ProblemPage />
                            </LazyPage>
                        ),
                    },
                ],
            },
        ],
    },
]);

export default router;
