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
          <p>Welcome to my first fully built webpage using bootstrap! I am new to coding and have not had any experience
                prior to attending this program. I am exctied to begin my journey and this first week has been quite intense
                so far!</p>
            <p>
                I have lived in Washington State for the last five years and absolutelty love it! Originally I hail from NY
                and have been enjoying the slower pace here, even if it just walking slower. Over the last five years as a
                hobby I have worked to hone my craft in photography and look forward to building a website that will help
                showcase some of my work!
            </p>
            <p>
                I have quite a large family at home that are rooting me on to have success in this program. This includes my
                wife, 4 children aged; 14,13,12, and 18 months! We also have one dog, three cats, and newly have become
                parents to three very sweet goats!
            </p>
          </div>
          <div className="col-md-6 contact-form">
          <h1>Contact</h1>
            <p>
              Thank you for visiting my portfolio and I hope you enjoyed what you have seen so far. Please feel free to send me an email using the contact-form to the left. Additionally there is a link to my LinkedIn page where you can find additional information about myself and experience. 
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
