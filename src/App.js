import Content from "./containers/Content/Content";
import Sidebar from "./containers/Sidebar/Sidebar";
import TimelinePart from "./containers/Timeline/Timeline";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Sidebar />
        <Content />
        <TimelinePart />
      </Layout>
    </>
  )
}

export default App;;