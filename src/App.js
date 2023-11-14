import SideBar from "./components/sidebar";
import Topbar from "./components/topbar";
import "./App.css";
import {Outlet} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="mainContainer">
        <SideBar className="sidebar" />
        <div className="bodyContainer">
        <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
