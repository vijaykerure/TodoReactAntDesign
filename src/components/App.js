
import { Steps, Divider } from 'antd';
import { useState } from 'react';
import { Layout } from 'antd';

// import TodoApp from './Todo';
import TodoApp from './TodoRedux';
import './App.css';

const { Header, Footer, Content } = Layout;

const { Step } = Steps;

const steps = [
  {
    key: 1,
    title: 'Todo',
    content: <TodoApp />,
  },
  // {
  //   key: 2,
  //   title: 'Family Information',
  //   content: 'Second-content',
  // },
  // {
  //   key: 3,
  //   title: 'Relatives',
  //   content: 'Last-content',
  // },
];

const BuildSteps = () => {
  const [ current, setCurrent ] = useState(0);

  return (
    <>
        <Steps current={current} onChange={ current => setCurrent(current)} size="default">
          {steps.map( step => {
            return <Step key={ step.key } title={ step.title }/>
          })}
        </Steps>

        <div className="steps-content">{steps[current].content}</div>
        
        <Divider />
    </>
  );
};

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header >Header</Header>
      <Content style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        background: '#fff',
      }}>
       
      <BuildSteps />
      </Content>
      <Footer >Footer</Footer>
    </Layout>
  );
}

export default App;
