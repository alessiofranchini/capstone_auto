import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import Home from "./components/Home";
import HomeCarousels from "./components/HomeCarousels";
import Footer from "./components/Footer";
import './Font.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Cliente from './components/Cliente';
import Collezioni from "./components/Collezioni";
import CarDetails from "./components/CarDetails";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={
          <>
            <HomeCarousels />
            <Home />
          </>
        } />
        <Route path="/home" element={
          <>
            <HomeCarousels />
            <Home />
          </>
        } />
        <Route path="/cliente" element={
          <>
            <Cliente />
          </>
        } />
        <Route path="/collezioni" element={
          <>
            <Collezioni />
          </>
        } />
        <Route path="/collezioni/:id" element={
          <>
            <CarDetails />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
