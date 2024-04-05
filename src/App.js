import { Route, Routes } from "react-router-dom";
import HomeLayout from "./components/layouts/homeLayout/HomeLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
    </Routes>
  );
}

export default App;
