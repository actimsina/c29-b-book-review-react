import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Link, Route, Routes, useSearchParams } from "react-router-dom";
import Home from "./components/Home";
import Books from "./components/Books";
import BookDetail from "./components/BookDetail";
import { useState } from "react";
function App() {

  const [books, setBooks] = useState([])
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
          <Link style={padding} to={'/books'}>books</Link>
        </div>

        <Routes>
          <Route path="/books/:id" element={<BookDetail books={books} />} />
          <Route path="/books" element={<Books books={books} setBooks={setBooks} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
