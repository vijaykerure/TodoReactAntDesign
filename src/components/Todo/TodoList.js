import { Empty, Popconfirm, Checkbox, List, Button, Skeleton } from "antd";
import { DeleteOutlined } from '@ant-design/icons';

const TodoList = ({ loading, todos = [], onDelete, onToggle }) => {

  if (todos.length === 0) {
    return <> <Empty /> </>;
  };

  return (
    <>
      <Skeleton loading={loading} active>
        <List
          bordered
          dataSource={todos}
          renderItem={({ completed, text, id }) => (

            <List.Item>
              <Checkbox style={completed ? { textDecoration: "line-through" } : {}} checked={completed} key={id} onClick={() => onToggle(id)} > {text} </Checkbox>

              <Popconfirm
                title="Are you sure to delete this task?"
                onConfirm={() => onDelete(id)}
                okText="Yes"
                cancelText="No"
              >

                <Button type="primary" danger icon={<DeleteOutlined />} />
              </Popconfirm>

            </List.Item>
          )}
        />
      </Skeleton>
    </>
  );
}

export default TodoList;
