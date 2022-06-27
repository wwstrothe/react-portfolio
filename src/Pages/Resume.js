import React from 'react'
import { Row, Col, Nav, Button } from 'react-bootstrap'

const Resume = () => {
return (
  <section className="page">
    <h1>Resume</h1>
    <Row>
      <Nav className="resume-pdf">
        <Button
          className="btn-lg"
          variant="link"
          href={`${process.env.PUBLIC_URL}/William Strothe's Resume.pdf`}
          target="_blank"
          rel="noreferrer"
        >
          View Full Resume
        </Button>
      </Nav>
    </Row>

    <Row className="resume-body">
      <Col lg={4}>
        <div className="card border-primary mb-3 bg-light">
          <div class="card-body">
            <h4>+ SKILLS AND TECHNOLOGIES</h4>
            <ul>
              <li>HTML, CSS, Javascript</li>
              <li>jQuery</li>
              <li>Web APIs</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Model-View-Controller Paradigms</li>
              <li>SQL</li>
              <li>MongoDB and Mongoose</li>
              <li>Progressive Web Application</li>
              <li>MERN</li>
            </ul>
          </div>
        </div>
      </Col>

      <Col lg={4}>
        <div className="card border-primary mb-3 bg-light">
          <div class="card-body">
            <h4>+ Recent Projects</h4>
            <h5>The Delicious Connection</h5>
            <p>
              <li>An application that allows users to find restaurants</li>
              <li>Still in production</li>
            </p>
            <h5>Doggy Daycare</h5>
            <p>
              <li>Utilized GitHub to properly document contributions</li>
              <li>
                Used Sequelize to create a database to store information for a
                business to be able to store and modify their clients
              </li>
              <li>
                Used Slack and Zoom as a means for pair programing to have quick
                responses between members
              </li>
            </p>
            <h5>Get Your Day Started Right!</h5>
            <p>
              <li>
                A daily inspiration application that uses APIs to generate
                positivity for users
              </li>
              <li>Used Daily Quote API, Giphy API, and Spotify API</li>
              <li>
                Users receive an inspirational GIF, a motivational Quote, and s
                playlist for their day
              </li>
            </p>
          </div>
        </div>
      </Col>

      <Col lg={4}>
        <div className="card border-primary mb-3 bg-light">
          <div class="card-body">
            <h4>+ Education</h4>
            <p>
              <p>- Michigan State University, Full Stack BootCamp</p>
              <p>- North Idaho College, Aerospace Composite Technology </p>
            </p>
            <h4>+ Work History</h4>
            <h5>Rocket Mortgage</h5>
            <p>
              <p>- Senior Banker- SOS Loan Specialist</p>
              <h6>September 2019 - Current</h6>
            </p>
            <h5>Outback Therapeutic Expeditions</h5>
            <p>- Emergency Response- Senior Field Guide</p>
            <h6>May 2018 - August 2019</h6>
          </div>
        </div>
      </Col>
    </Row>
  </section>
);
}

export default Resume