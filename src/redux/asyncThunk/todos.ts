import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAddTodo = createAsyncThunk(
    'todos/fetchAddTodo',
    async (todo: any, thunkAPI: any) => {
        try {
            // const result = await API.addTodo(todo);
            // return result;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error });
        }
    },
    {
        // condition: () => { },
        dispatchConditionRejection: true,
    },
);
