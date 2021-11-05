import logo from './logo.svg';
import './App.css';
import { Routes, Route  } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
function App() {
  return (
    <div className="App">
    <h1>Welcome to React Router!</h1>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  </div>
  );
}

export default App;
