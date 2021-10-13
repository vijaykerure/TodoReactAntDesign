import { useState } from 'react';
import { Form, Empty, Checkbox, List, Button, Skeleton, Input, Space, Select } from "antd";
import { DeleteOutlined, SaveOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

const TodoList = ({ loading, todos = [], onDelete, onToggle, onEditMode, offEditMode }) => {

  const [bordered, setBordered] = useState(false);

  const initialValues = {
    "firstName": "First Name",
    "lastName": "Last Name"
  }
  const initialFields = [
    {
      "key": 0,
      "fieldKey": 0,
      "name": "firstName",
      "createdAt":"2021-09-26T20:45:42.853Z",
      "text":"First Name",
      "completed":false,
      "id":"1"
    },
    {
      "key": 1,
      "fieldKey": 1,
      "name": "lastName",
      "createdAt":"2021-09-26T20:45:42.853Z",
      "text":"Last Name",
      "completed":false,
      "id":"2"
    },
  ];

  const onFinish = values => {
    console.log('Received values of form:', values);
  };

  return (
    <>
      <Skeleton loading={loading} active>
        { todos.length === 0 ? <Empty /> : 

          <Form name="todos" layout="inline" initialValues={initialValues} onFinish={onFinish} autoComplete="off">
            {
              initialFields.map( ({ id, completed, name, text }) => (
                <Input.Group compact>
      <Input type="text" /> <Input defaultValue="Xihu District, Hangzhou" />
    </Input.Group>
              ))

            }
            

            <Form.List name="todosList">
              {(fields, { add, remove }) => (
                <>
                  { fields.map(({ key, name, fieldKey, ...restField }) => { 
                    console.log(fieldKey);
                    return (
                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                      <Form.Item
                        {...restField}
                        name={[name, 'other']}
                        fieldKey={[fieldKey, 'other']}
                        rules={[{ required: true, message: 'Missing other name' }]}
                      >
                        <Input placeholder="Other Field Name" />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  )}) }
                   <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                      Add field
                    </Button>
                  </Form.Item>
                </> 
              )}

            </Form.List>
          </Form>
        
        }
      </Skeleton>
    </>
  );
}

export default TodoList;
