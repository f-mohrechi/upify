import React, { useState } from "react";
import Sidebar from "../../sidebar/Sidebar";
import Home from "../../../pages/Home";
import DiscoverPage from "../../../pages/DiscoverPage";
import Header from "../../header/Header";

export default function HomeLayout() {
  const [activeComponent, setActiveComponent] = useState("Home");

  const handleSelectPage = (page_name) => {
    setActiveComponent(page_name);
  };

  function handleWhichActive(page_name) {
    switch (page_name) {
      case "Home":
        return <Home />;
      case "Discover":
        return <DiscoverPage />;
      default:
        return <Home />;
    }
  }

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar
          handleSelectPage={handleSelectPage}
          activeComponent={activeComponent}
        />
      </div>

      <div className="col-span-10 bg-gradient h-full">
        <div>
          <Header />
        </div>
        {handleWhichActive(activeComponent)}
      </div>
    </div>
  );
}
