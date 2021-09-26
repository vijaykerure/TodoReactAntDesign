import { useState } from 'react';
import { Modal, Input, Button, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const TodoActions = ({ addTodo, setTodos }) => {
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
                setTodos([]);
            },
        });
    }

    return (
     
        <form onSubmit={(e) => { 
                e.preventDefault();
                todo ? addTodo(todo) : setTodo("");
                setTodo("");
                return;
            }} >
            <Space>
                <Input placeholder="Add Task" value={todo} onChange={e => setTodo(e.target.value)} />
                <Button type="primary" ghost onClick={ () => { todo ? addTodo(todo) : setTodo(""); setTodo(""); }}>Create Task</Button>
                <Button danger onClick={ () => resetTodo() }>Reset Todos</Button>
            </Space>
        </form>
       
    );
}

export default TodoActions;