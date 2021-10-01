
import { Steps, Divider } from 'antd';
import { useState } from 'react';
import TodoApp from './Todo';
import '../App.css';

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


export default BuildSteps;



