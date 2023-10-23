import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import socketConnection from "./webRTCutilities/socketConnection";
import MainVideoPage from "./videoComponents/MainVideoPage";
import ProDashboard from "./siteComponents/ProDashboard";
import ProMainVideoPage from "./videoComponents/ProMainVideoPage";

const Home = () => <h1>Hello, Home page</h1>;

const style = {
  display: "flex",
  justifyContent: "space-around",
  paddingLeft: "10px",
};

function App() {
  return (
    <BrowserRouter>
      <div style={style}>
        <Link to={"/"}>Home</Link>
        <Link to={"/join-video"}>joinVideo</Link>
        <Link to={"/dashboard"}>dashboard</Link>
        <Link to={"/join-video-pro"}>joinVideoPro</Link>
      </div>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/join-video" Component={MainVideoPage} />
        <Route exact path="/dashboard" Component={ProDashboard} />
        <Route exact path="/join-video-pro" Component={ProMainVideoPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
