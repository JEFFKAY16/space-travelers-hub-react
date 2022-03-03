import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import RocketsList from './components/rockets/RocketsList';
import Missions from './components/Missions';
import Profile from './components/profile/Profile';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<RocketsList />} />
          <Route path="/mission" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
