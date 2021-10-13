
import { Divider } from 'antd';
import TodoList from './TodoList';
import TodoActions from './TodoActions';
import { useSelector, useDispatch } from "react-redux";
import { listTodos, createTodo, deleteTodo, toggleTodo, updateTodo, onEditMode, offEditMode } from '../../actions';
import { useEffect } from 'react';

const Todo = () => {
  const { loading, todos } = useSelector(state => state.todoApp);

  const dispatch = useDispatch();

  // Initial Load
  useEffect(() => {
    dispatch(listTodos());
  }, [dispatch]);

  return (<>
    <TodoActions count={ todos.length } addButton={ true } resetButton={ false }     
    onAdd={ payload =>  dispatch(createTodo(payload)) }/>
    <Divider />
    <TodoList loading={loading} todos={ todos } onDelete={ id => dispatch(deleteTodo(id)) } 
      onEdit={ payload => dispatch(updateTodo(payload)) }
      onToggle={ payload => dispatch(toggleTodo(payload))}
      onEditMode={ payload => dispatch(onEditMode(payload))}
      offEditMode={ payload => dispatch(offEditMode(payload))}
    />
  </>);
};

export default Todo;
