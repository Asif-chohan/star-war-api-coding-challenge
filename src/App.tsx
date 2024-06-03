import "./App.css";
import { ConfigProvider } from "antd";
import StarWarList from "./modules/starWarList";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}
    >
      <StarWarList />
    </ConfigProvider>
  );
}

export default App;
