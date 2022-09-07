import React from "react";
import Routers from "./routes/routes";
import "./css/index.css";
import Layout from "./components/layouts";
function App() {
  return (
    <Layout>
      <Routers />
    </Layout>
  );
}

export default App;
