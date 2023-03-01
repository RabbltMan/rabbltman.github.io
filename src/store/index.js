import {configureStore} from '@reduxjs/toolkit';
import tableReducer from './reducer/table';

const store = configureStore({
    reducer: {
        table: tableReducer,
    },
});

export default store;