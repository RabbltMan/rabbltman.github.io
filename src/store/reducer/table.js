import {createSlice} from '@reduxjs/toolkit';


const tableSlice = createSlice({
    name: 'table',
    initialState: {
        details: [
            {
                itemName: "第1项",
                updateTime: "3-1 19:32",
            },
            {
                itemName: "第2项",
                updateTime: "3-1 19:33",
            },
            {
                itemName: "第3项",
                updateTime: "3-1 19:33",
            },
        ],
    },
    reducers: {},
});

export default tableSlice.reducer;