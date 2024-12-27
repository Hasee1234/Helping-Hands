import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import DonationBlog from '../Pages/Donationblogs/DonationBlog';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import VolunteerBlog from '../Pages/VolunteerBlog/VolunteerBlog';

function Routing() {
  return (
      <Routes>
        <Route path="/" 
        element={<Home />} />

        <Route path="/Donationblog" 
        element={<DonationBlog/>} />
        
        <Route path="/VolunteerBlog" 
        element={<VolunteerBlog/>} />
        
        <Route path="/About" 
        element={<About/>} />
        
        <Route path="/Contact" 
        element={<Contact/>} />

      </Routes>
  );
}

export default Routing;
