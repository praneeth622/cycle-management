import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/Notfound';
import Post from './pages/Post';
import Find from './pages/Find';
import ProductDetail from './pages/ProductDetail';
import Register from './pages/register';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post" element={<Post />} />
          <Route path="/find" element={<Find />} />
          <Route path="*"element={<NotFound />}/>
          <Route path="/find/:id" element={<ProductDetail />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
