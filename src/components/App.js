import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import CreateAccount from "./login/CreateAccount";
import Home from "./home-page/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
