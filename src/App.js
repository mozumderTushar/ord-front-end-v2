import './styles/App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/Shared/NavBar/NavBar/NavBar';
import Home from './components/Home/Home/Home';
import { useEffect } from 'react';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<NavBar />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
