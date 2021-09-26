
import { Steps, Divider } from 'antd';
import { useState } from 'react';
import PersonalInformation from './PersonalInformation';
import '../App.css';

const { Step } = Steps;

const steps = [
  {
    key: 1,
    title: 'Todo',
    content: <PersonalInformation />,
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

  const onChange = current => {
    setCurrent(current);
  }

  return (
    <>
        <Steps current={current} onChange={onChange} size="default">
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



