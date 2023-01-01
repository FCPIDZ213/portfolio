import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { TeamCard } from "./TeamCard";
import projImg1 from "../assets/img/nodex.png";
import projImg2 from "../assets/img/fond.png";
import projImg3 from "../assets/img/fond.png";
import projImg4 from "../assets/img/team2.png";
import projImg5 from "../assets/img/fond.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Team = () => {

  const team = [
    {
      title: "DZ-staking",
      description: "Founder",
      imgUrl: projImg1,

    },
    {
      title: "",
      description: "",
      imgUrl: projImg2,
    },
    {
      title: "G-tech",
      description: "Co-founder",
      imgUrl: projImg4,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg3,
    },

  ];

  return (
    <section className="team" id="team">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <br></br>
               
                <br></br>
                <br></br>
                <center><h2>Team</h2>
                <p>We are legion, we don't forget, expect us!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          team.map((team, index) => {
                            return (
                              <TeamCard
                                key={index}
                                {...team}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container></center>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
