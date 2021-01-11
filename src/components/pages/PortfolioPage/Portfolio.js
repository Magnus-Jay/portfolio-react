import React from "react";
import "./style.css";
import freshest from "../../../assets/freshest.png";
import dnd from "../../../assets/dnd.png";
import Note from "../../../assets/note-taker.png";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// library.add(fab, faGithub)

function Portfolio() {
  return (
    <Container className="container page-padding" fluid>
      <Row className="row" id="rowTwo">
          <h1 id="port">GitHub Projects</h1>
      </Row>
      <Row className="row" id="rowTwo">
        <Col md="auto" className="projectTwo">
          <img src={dnd} id="pic-two" alt="deployed app link" />
         <h5>
           <span>
            Fantasy Character Creator 
          <a href="https://stark-island-65376.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-globe mag-icon" aria-hidden="true"></i>
          </a >
          <a href="https://github.com/artuis/dnd-action-calculator" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github mag-icon" aria-hidden="true"></i>
          </a >
          </span>
          </h5 >  
        </ Col>
      </Row>
      <Row className="row" id="rowThree">
        <Col md="auto" className="projectOne">
          <img src={freshest} id="pic-one" alt="comet" />
          <h5>
           <span>
            Fresh Air - Hiking and Food Finder
          <a href="https://clubkemp.github.io/freshair/" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-globe mag-icon" aria-hidden="true"></i>
          </a >
          <a href="https://github.com/clubkemp/freshair" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github mag-icon" aria-hidden="true"></i>
          </a >
          </span>
          </h5 > 
        </ Col>
      </Row>
      <Row className="row" id="rowFour">
        <Col md="auto" className="projectThree">
          <img src={Note} id="pic-three" alt="deployed app link" />
          <h5>
           <span>
            Note Taking Application
          <a href="https://calm-wildwood-27402.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-globe mag-icon" aria-hidden="true"></i>
          </a >
          <a href="https://github.com/Magnus-Jay/note-taker" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github mag-icon" aria-hidden="true"></i>
          </a >
          </span>
          </h5 > 
        </ Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
