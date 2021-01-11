import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/HomePage/Home";
import Portfolio from "./components/pages/PortfolioPage/Portfolio";
import Contact from "./components/pages/ContactPage/Contact";
import Footer from "./components/footer.js"
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import { library } from '@fortawesome/fontawesome-svg-core';
import Navbar from 'react-bootstrap/Navbar'

function App() {
  return (
   <div> 
    <Router>
      <div className="seanTest">
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
    <Footer />
   </div>   
  );
}

export default App;
