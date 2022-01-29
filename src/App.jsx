import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Chat from "./components/Chat";

import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

function App() {
  return (
    <Router>
      <div className="App">
        <LeftBar />
        <Routes>
          <Route exact path="/" element={<RightBar />} />

          <Route path="/chat/:id" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
