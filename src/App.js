import './styles/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/Shared/NavBar/NavBar/NavBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />} />
      </Routes>
    </Router>
  );
}

export default App;
