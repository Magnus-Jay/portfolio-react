import React from "react";
import "./style.css";
import freshAir from "../../../assets/freshAir.gif";
import dnd from "../../../assets/dnd.png";
import fantasyChar from "../../../assets/fantasyChar.gif";
import passGen from "../../../assets/passGen.gif";
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
      <h5>
           <span className="spans push">
            Fantasy Character Creator 
          <a href="https://stark-island-65376.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-globe mag-icon" aria-hidden="true"></i>
          </a >
          <a href="https://github.com/artuis/dnd-action-calculator" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github mag-icon" aria-hidden="true"></i>
          </a >
          </span>
          </h5 >
      </Row>
      <Row className="row" id="rowTwo">
        <div className="proj-one-container row">
        <div className="proj-one" >
        <img src={fantasyChar} id="pic-two" alt="deployed app link" />
          </div>
          <p id="fantasy-description" className="col-6">
          The fantasy character creator app lets you digitize your character sheets for your table-top role playing games. It uses a widget based system to allow the user to pick and choose waht information they need and control all aspects of that data.
          <br></br>
          <br></br>
        <p className="bolder">Technologies</p>
        <p><span className="bolder">Front-end:</span> Express-Handlebars,PaperCSS,jQuery
          <br></br>
        <span className="bolder">Back-end:</span> Dotenv,Express, Express-session, Sequelize, MySQL2, Nodemailer</p>
        </p>
          </div>
      </Row>
      <br></br>
      <Row className="row" id="rowThree">
      <h5 className="title">
           <span className="spans push">
           Fresh Air- Hiking/Food
          <a href="https://clubkemp.github.io/freshair/" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-globe mag-icon" aria-hidden="true"></i>
          </a >
          <a href="https://github.com/clubkemp/freshair" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github mag-icon" aria-hidden="true"></i>
          </a >
          </span>
          </h5 >
          </ Row>
          <Row className="row" id="rowFive">
        <div className="proj-two-container row">
          <p id="fresh-description" className="col-6">
          Fresh air is application that allows users to find hikes using their geo-location if they accept, or search by radius using a zipcode. Once a search is completed, hiking options are displayed with all pertinent trail information.
          <br></br>
          <br></br>
        <p className="bolder">Technologies</p>
        <p><span className="bolder">Front-end:</span> Express-Handlebars,PaperCSS,jQuery
          <br></br>
        <span className="bolder">Back-end:</span> Dotenv,Express, Express-session, Sequelize, MySQL2, Nodemailer</p>
        </p>
        <div className="proj-two">
        <img src={freshAir} id="pic-one" alt="comet" />
          </div>
          </div>
      </Row>
      <br></br>
      <Row className="row" id="rowFour">
      <h5>
           <span className="spans">
           Note Taking Application
          <a href="https://calm-wildwood-27402.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-globe mag-icon" aria-hidden="true"></i>
          </a >
          <a href="https://github.com/Magnus-Jay/note-taker" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github mag-icon" aria-hidden="true"></i>
          </a >
          </span>
          </h5 >
          </ Row>
          <Row className="row" id="rowSix">  
        <div className="proj-three-container row">
        <div className="proj-three">
        <img src={Note} id="pic-three" alt="deployed app link" />
          </div>
          <p id="note-description" className="col-6">
          The note taking application allows a user to create, save and delete notes. The notes are saved to a users local storage in the browser.
          <br></br>
          <br></br>
        <p className="bolder">Technologies</p>
        <p><span className="bolder">Front-end:</span> Express-Handlebars,PaperCSS,jQuery
          <br></br>
        <span className="bolder">Back-end:</span> Dotenv,Express, Express-session, Sequelize, MySQL2, Nodemailer</p>
        </p>
          </div>
      </Row>
      <Row className="row" id="rowSeven">
      <h5 className="title">
           <span className="spans push">
           Password Generator
          <a href="https://github.com/Magnus-Jay/password--gen" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github mag-icon" aria-hidden="true"></i>
          </a >
          </span>
          </h5 >
          </ Row>
          <Row className="row" id="rowEight">
        <div className="proj-four-container row">
          <p id="pass-description" className="col-6">
          The Password Generator application is simple but powerful. It is powered using a simple html index page to display visual cues for the user. Using plain Javascript through if statements and prompts, the user is asked to choose a length between 8-128 characters, and if they want to include lower or upper case letters, as well as numbers.
          <br></br>
          <br></br>
        <p className="bolder">Technologies</p>
        <p><span className="bolder">Front-end:</span> HTML and Javascript
          <br></br>
        <span className="bolder">Back-end:</span> none, the app is ran in the broswer from the html file</p>
        </p>
        <div className="proj-four">
        <img src={passGen} id="pic-seven" alt="comet" />
          </div>
          </div>
      </Row>
    </Container>
  );
}

export default Portfolio;
