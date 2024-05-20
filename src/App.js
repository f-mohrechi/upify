import { Route, Routes } from "react-router-dom";
import HomeLayout from "./components/layouts/homeLayout/HomeLayout";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import DiscoverPage from "./pages/DiscoverPage";
import Page from "./pages/Page";
import ContentPage from "./pages/ContentPage";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<HomeLayout />} />
    // </Routes>

    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>

      <div className="col-span-10 bg-gradient h-full">
        <div className="sticky top-0 right-0 w-full">
          <Header />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/content/:type/:id" element={<ContentPage />} />
            <Route path="/:title" element={<Page />} />
            <Route path="/:title/:id" element={<Page />} />
          </Routes>
        </div>

        <div>{/* <Footer /> */}</div>
      </div>
    </div>
  );
}

export default App;
