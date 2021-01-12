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
    </Container>
  );
}

export default Home;
