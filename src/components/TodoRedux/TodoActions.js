import { useState } from 'react';
import { Modal, Input, Button, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const TodoActions = ({ count, onAdd, onReset, addButton = true, resetButton = true }) => {
  const [todo, setTodo] = useState("");

  const resetTodo = () => {
    confirm({
      title: 'Are you sure reset todo list?',
      icon: <DeleteOutlined />,
      content: 'It can not be reverse.',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        onReset([]);
      },
    });
  }


  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        todo ? onAdd({ id: count+1, text: todo, completed: false }) : setTodo("");
        setTodo("");
        return;
      }} >
        <Space>
          <Input placeholder="Add Task" value={todo} onChange={e => setTodo(e.target.value)} />
          {
            addButton ? <Button type="primary" ghost onClick={() => { todo ? onAdd({ id: count+1, text: todo, completed: false }) : setTodo(""); setTodo(""); }}>Create Task</Button> : null
          }
          {
            resetButton ? <Button danger onClick={() => resetTodo()}>Reset Todos</Button> : null
          }
          <h3>Total: { count }</h3>
        </Space>
      </form>
    </>
  );
}

export default TodoActions;