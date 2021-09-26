import { Popconfirm, Checkbox, List, Button } from "antd";
import { DeleteOutlined } from '@ant-design/icons';

const TodoList = ({ todos = [], setTodos }) => {

    if (todos.length === 0) {
        return <>Empty List</>
    };

    const toggleTodo = index => {
        setTodos( todos.map( (todo, i) => index === i ? { ...todo, completed: !todo.completed } : todo ) );
    }

    const deleteTodo = index => {
        setTodos( todos.filter( (todo, i) => index === i ? false: todo ) );
    }

    return (
       
        <List
            bordered
            dataSource={ todos }
            renderItem={ ({ completed, key, text }, i) => (
                <List.Item>
                    <Checkbox style={ completed ? { textDecoration: "line-through" } : {} } checked={ completed } key={ key } onClick={ () => toggleTodo(i) }> { text } </Checkbox>
                   
                    <Popconfirm
                        title="Are you sure to delete this task?"
                        onConfirm={ () => deleteTodo(i) }
                        okText="Yes"
                        cancelText="No"
                    >
                
                    <Button type="primary" danger icon={<DeleteOutlined />} />
                    </Popconfirm>
                </List.Item>                
            )}
        />
    );
}

export default TodoList;