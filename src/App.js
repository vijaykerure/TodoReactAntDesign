import { Layout } from 'antd';
import BuildSteps from './components/BuildSteps';

const { Header, Footer, Content } = Layout;


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
