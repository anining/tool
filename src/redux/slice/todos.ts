import { createSlice } from '@reduxjs/toolkit';
import { fetchAddTodo } from '../asyncThunk/todos';

export const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: {
            reducer: (state, action): any => [...state, action.payload],
            prepare: (todo): any => ({ payload: todo }),
        },
        // removeTodo: {
        //     reducer: (state, action) => state.filter(todo => todo.id !== action.payload),
        //     prepare: id => ({ payload: id }),
        // },
        // toggleTodo: {
        //     reducer: (state, action) => state.map(todo => todo.id !== action.payload ? todo : Object.assign({}, todo, {
        //         complete: !todo.complete,
        //     })),
        //     prepare: id => ({ payload: id }),
        // },
    },
    extraReducers: (builder: any) => {
        builder
            .addCase(fetchAddTodo.pending, (state: any, action: any) => { })
            .addCase(fetchAddTodo.fulfilled, (state: any, action: { payload: any; }) => [...state, action.payload])
            .addCase(fetchAddTodo.rejected, (state: any, action: any) => { })
            .addMatcher((action: any) => false, (state: any, action: any) => { })
            .addDefaultCase((state: any, action: any) => state)
    }
});
