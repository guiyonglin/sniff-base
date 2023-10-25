import ComponentLoader from './ComponentLoader';
import Home from './pages/home'

export const routers = [
    {
        path: '/oem/home',
        element: (
            <Home />
        )
    },
    {
        path: '/oem/about',
        element: <div>
            about
        </div>
    },
    {
        path: '/marketing/home',
        element: <ComponentLoader path='/marketing/home' projectId="marketing" />
    },
    {
        path: '/marketing/dashboard',
        element: <ComponentLoader path='/marketing/dashboard' projectId="marketing" />
    },
    {
        path: '/*',
        element: (
            <div>
                迷失方向
            </div>
        )
    },
]