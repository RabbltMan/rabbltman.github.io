import {createBrowserRouter, redirect} from 'react-router-dom';
import Main from '../pages/Main';
import Archive from '../pages/Archive';
import Events from '../pages/Events';
import Misc from '../pages/Misc';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: "/Archive",
        element: <Archive />,
    },
    {
        path: "/Events",
        element: <Events />,
    },
    {
        path: "/Misc",
        element: <Misc />,
    },

]);

export default router;
