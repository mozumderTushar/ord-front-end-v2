import './styles/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/Shared/NavBar/NavBar/NavBar';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<NavBar />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
