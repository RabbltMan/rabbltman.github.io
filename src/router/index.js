import {createBrowserRouter} from 'react-router-dom';
import Main from '../pages/Main';
import Archive from '../pages/Archive';

const router = createBrowserRouter([
    {
        path: '/*',
        element: <Main />,
    },
    {
        path: "/Archive",
        element: <Archive />,
    }

]);

export default router;