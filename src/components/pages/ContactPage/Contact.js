import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css"
import { Container, Col } from "react-bootstrap";
import Row from 'react-bootstrap/Row';

function Contact(props) {
  return (
   <Container> 
    <div className="container page-padding">
        <Row className="row">
          <div className="col-md-12" id="heading">
            <hr />
          </div>
          <div className="col-md-6">
            <h1>BIO</h1>
            <p>
                I have lived in Washington State for the last five years and absolutelty love it! Originally I hail from NY
                and have been enjoying the slower pace here, even if it just walking slower. Over the last five years as a
                hobby I have worked to hone my craft in photography and look forward to building a website that will help
                showcase some of my work!
            </p>
            <p>
               As a new programmger, I have found myself enjoying all aspects of development from front-end and styling to building express servers and databases. Take a look at my portfolio page or head over to my GitHub to check out some of my projects and work I have done.
            </p>
          </div>
          <div className="col-md-6 contact-form">
          <h1>Contact</h1>
            <p>
              Thank you for visiting my portfolio and I hope you enjoyed what you have seen so far. Please feel free to send me an email using the one listed below. Additionally there is a link to my LinkedIn page where you can find additional information about myself and experience. Send me a connection request and say hi!
            </p>
            {/* <br /> */}
            <p>Email:   <a href="mailto:magnus86@uw.edu">magnus86@uw.edu</a></p>
            <p>Check out my work history and my professional profile on:</p>
            <button className="btn btn-dark" id="linked"><a href="https://www.linkedin.com/in/magnusappe/">LinkedIn Profile</a></button>
            <br />
            <br />
            <p>Check out my Github profile:</p>
            <button className="btn btn-dark" id="linked"><a href="https://github.com/Magnus-Jay">GitHub Profile</a></button>

          </div>
        </ Row>
      </div>
      </ Container>  
  );
}

export default Contact;
