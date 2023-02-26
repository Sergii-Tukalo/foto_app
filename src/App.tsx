import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Navigator } from './components/Navigator';
import './App.css';
import { Photos } from './components/Photos';
import { Favorites } from './components/Favorites';
import { About } from './components/About';
import { Users } from './components/Users';

function App() {
  return (
    <div className="App">
      <Navigator />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/users"
          element={<Users />}
        />
        <Route
          path="/photos"
          element={<Photos />}
        />
        <Route
          path="/favorites"
          element={<Favorites />}
        />
        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </div>
  );
}

export default App;
