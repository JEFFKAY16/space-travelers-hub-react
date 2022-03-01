import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Rocket from './components/Rocket';
import Mission from './components/Mission';
import Profile from './components/Profile';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
