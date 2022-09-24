import Content from "./containers/Content";
import Sidebar from "./containers/Sidebar";
import Timeline from "./containers/Timeline";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Sidebar />
        <Content />
        <Timeline />
      </Layout>
    </>
  )
}

export default App;
