import { Empty, Checkbox, List, Button, Skeleton, Input, Space } from "antd";
import { DeleteOutlined, SaveOutlined } from '@ant-design/icons';

const TodoList = ({ loading, todos = [], onDelete, onToggle, onEditMode, offEditMode }) => {

  return (
    <>
      <Skeleton loading={loading} active>
        { todos.length === 0 ? <Empty /> : 
        <List
          bordered
          dataSource={todos}
          renderItem={({ bordered = false, completed, text, id } = {}) => (
            
              <List.Item 
                actions={[
                  bordered ?<Button type="dashed" onClick={(e) => offEditMode({ id, text: e.currentTarget.previousElementSibling.value })} icon={<SaveOutlined />}> Save </Button> : null, 
                  <Button type="primary" danger icon={<DeleteOutlined />} onClick={ () => onDelete(id) } />
                ]}
              >
                <Space >
                  <Checkbox checked={ completed } key={ id } onClick={() => onToggle({ id, completed })} />
                  
                  <Input               
                    onChange={ e => e.target.value = text }
                    defaultValue={ text }
                    bordered={ bordered }
                    onClick={() => onEditMode({ id, text })}                
                    style={ completed ? { textDecoration: "line-through" } : {}}
                  />
                </Space>
              </List.Item>
          )}
        />
        }
      </Skeleton>
    </>
  );
}

export default TodoList;
