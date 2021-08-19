import { useDispatch, useSelector, useStore } from 'react-redux';
// import { unwrapResult } from '@reduxjs/toolkit';
import { todosSlice } from '../redux/slice/todos';
// import { fetchAddTodo } from '../redux/asyncThunk/todos';
import { useEffect } from 'react';

function Home() {
  const todos = useSelector((state: { todos: Array<any> }) => state.todos);
  const dispatch = useDispatch();
  const store = useStore();
  const { actions: { addTodo, removeTodo, toggleTodo } }: any = todosSlice;

  useEffect(() => {
    console.log(todos);
    console.log(store);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addItem = (e: any) => {
    // e.preventDefault();
    const params = {
      id: Math.random(),
      text: Math.random(),
      complete: false,
    };
    // const result = dispatch(fetchAddTodo(params));
    // console.log(result);
    // result
    //   .then(unwrapResult)
    //   .then((originalPromiseResult: any) => { console.log(originalPromiseResult) })
    //   .catch((rejectedValueOrSerializedError: any) => { console.log(rejectedValueOrSerializedError) })
    dispatch(addTodo(params));
  };

  const removeItem = (param: { id: Number }) => {
    const { id } = param;
    dispatch(removeTodo(id));
  };

  const changeItem = (param: { id: Number }) => {
    const { id } = param;
    dispatch(toggleTodo(id));
  };

  return (
    <>
      <div>Home</div>
      <div onClick={() => {
        console.log(todos);
        console.log(store);
      }}>show</div>
      <div onClick={() => {
        addItem({ id: 1 });
      }}>addItem</div>
      <div onClick={() => {
        removeItem({ id: 1 });
      }}>removeItem</div>
      <div onClick={() => {
        changeItem({ id: 1 });
      }}>changeItem</div>
    </>
  )
}

export default Home;

// "redux": "^4.0.4",
// "redux-thunk": "^2.3.0"
