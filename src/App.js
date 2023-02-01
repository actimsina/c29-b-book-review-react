import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
function App() {
  const padding = {
    padding: 5
  }
  return (
    <div className="container">
      <h2>Book Review App</h2>
      <Router>
        <div>
          <Link style={padding} to={'/'}>home</Link>
          <Link style={padding} to={'/login'}>login</Link>
          <Link style={padding} to={'/register'}>register</Link>
        </div>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
