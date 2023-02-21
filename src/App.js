import React from 'react';
import router from './router';
import {RouterProvider} from 'react-router-dom';

class App extends React.Component {
    render() {
        return <RouterProvider router={router} />;
    }
}

export default App;
