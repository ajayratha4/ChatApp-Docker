import MainLayout from "components/Layout/MainLayout";
import Store from "context";
import "./MuiClassNameSetup";
import "./app.css";

const App = () => {
  return (
    <Store>
      <MainLayout />
    </Store>
  );
};

export default App;
