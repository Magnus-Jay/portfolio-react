import React from "react";
import "./style.css";
// import family from "../../../assets/family-bobs.jpeg"
import linkedin from "../../../assets/linkedin.jpeg";
import rialto from "../../../assets/rialto.jpeg";
import rialto1 from "../../../assets/rialto1.png";  
import { Container, Col } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'

function Home() {
  return (
    <Container className='container page-padding' fluid>
      <h1 id="home-heading">Magnus Appel</h1>
      <Row>
        <Col md="auto">
          <Image className="responsive" src={rialto1} rounded/>
        </Col>   
      </Row> 
      <Row className="bio-heading">
      </Row>
      <Row className="home-row">
      <div className="col-md-6 bio-heading">
      <h1 className="bio-heading">
          Bio
        </h1>
        <div className="bio-info"><p>I have lived in Washington State for the last five years and absolutelty love it! Originally I hail from NY
                and have been enjoying the pace here, even if it's just walking slower. Over the last five years as a
                hobby I have worked to hone my craft in photography and look forward to building a website that will help
                showcase some of my work!
        <br></br>
        <br></br>
              More recently I have become certified in Web development and have been building applications such as the profile you are seeing here. This application was built using the React framework. For styling I am using React Bootstrap as well as Google fonts. Currently the application is deployed utlilizing Amazon's cloud hosting application, AWS Amplify.      
                </p>
        </div>
        </div>
        <div className="col-md-6 language-heading">
        <h1>
          Technical Skills
        </h1>
        <div className="language-info">
          <p><span className="bolder">Languages:</span>
          <br></br>
          <br></br>
          Javascript, CSS, HTML
          <br></br>
          <br></br>
          <span className="bolder">Databases:</span>
          <br></br>
          <br></br>
          MySQL, MongoDB
          <br></br>
          <br></br>
          <span className="bolder">Frameworks/Libraries:</span>
          <br></br>
          <br></br>
          React.js, JQuery, Node.js, Express.js, Git, Heroku, AWS Amplify, React Bootstrap
        </p>
        </div>
        </div>
        </Row>   
    </Container>
  );
}

export default Home;
