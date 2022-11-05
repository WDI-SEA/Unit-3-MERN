import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import MainBlog from './components/MainBlog/MainBlog'
import FavoriteFood from './components/FavoriteFood/FavoriteFood'
import FavoriteMovie from './components/FavoriteMovie/FavoriteMovie'

function App() {


  const moviesList = ['Tenet', 'Inception', 'Akira', 'Interstellar', 'Spirited Away']
  const foodList = ['Pizza', 'Burger', 'Fries', 'Soda', 'Chicken Strips']



  return (
    <div className="App">
      

      <Router>
        <nav>
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/main-blog">Main Blog</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/favorite-food">Favorite Food</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/favorite-movie">Favorite Movie</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/main-blog" element={<MainBlog />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/favorite-food" element={<FavoriteFood foodList={foodList} />}></Route>
          <Route path="/favorite-movie" element={<FavoriteMovie moviesList={moviesList} />}></Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
