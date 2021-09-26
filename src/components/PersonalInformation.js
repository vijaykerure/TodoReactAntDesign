
import { Row, Col, Divider } from 'antd';
import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const PersonalInformation = () => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={24}>
          <AddTodo setTodos= { setTodos } addTodo={ text => setTodos([{ key: todos.length, text, completed: false }, ...todos]) }/>
          </Col>
      </Row>
      <Divider />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col md={{ span: 12 }} xs={{ span: 24 }}>
          <TodoList todos={ todos } setTodos= { setTodos }/>
        </Col>
      </Row>
      
    </>
  );
};

export default PersonalInformation;
