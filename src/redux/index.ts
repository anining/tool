import { configureStore } from '@reduxjs/toolkit';
import logger from './middleware/logger';
import { todosSlice } from './slice/todos';

const { reducer: todosReducer } = todosSlice;
const reducer = {
    todos: todosReducer,
};

const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware => [...getDefaultMiddleware({
        // thunk: {},
        // immutableCheck: process.env.NODE_ENV !== 'production',
        // serializableCheck: process.env.NODE_ENV !== 'production',
    }), logger],
    // devTools: process.env.NODE_ENV !== 'production',
    preloadedState: {},
    enhancers: defaultEnhancers => defaultEnhancers,
})

export default store;
