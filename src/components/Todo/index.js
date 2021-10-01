
import { Divider } from 'antd';
import { useState, useEffect } from 'react'
import axios from 'axios';
import TodoActions from './TodoActions';
import TodoList from './TodoList';

const baseURL = 'https://61514f5bd0a7c100170169cc.mockapi.io';

const Todo = () => {
  
  const [ todos, setTodos ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    console.log('Fetching data from server....');
    axios.get(`${baseURL}/api/v1/todos`).then((response) => {
      setTodos(response.data);
      setLoading(false);
    });
  }, []);

  const addTodo = text => {
    setLoading(true);
    axios.post(`${baseURL}/api/v1/todos`, { text, completed: false }).then((response) => {
      setTodos([ response.data, ...todos])
      setLoading(false);
    });
  }

  const onDelete = id => {
    setLoading(true);
    axios.delete(`${baseURL}/api/v1/todos/${ id }`).then(() => {
      setTodos( todos.filter( todo => todo.id === id ? false: todo ) );
      setLoading(false);
    });
  }

  const onToggle = id => {
    setLoading(true);
    setTodos( todos.map( todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo ) );
    const todo = todos.find( todo => todo.id === id );
    axios.put(`${baseURL}/api/v1/todos/${ id }`, { completed: !todo.completed }).then(() => setLoading(false));
  }

  return (<>
    <TodoActions count={ todos.length } addButton={ true } resetButton={ false } onAdd={ addTodo } onReset={ todos => setTodos(todos) } />
    <Divider />
    <TodoList loading={ loading } todos={ todos } onDelete={ onDelete } onToggle={ onToggle } />
  </>);
};

export default Todo;
