import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Resume = () => {
  return (
    <section className='page'>
        <div>
            <h2 class="title">Resume</h2>
            <a class="button" href="./Assets/William Strothe's Resume.pdf" target="_blank">View Full Resume</a>
        </div>
        <Row>
                <Col>
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
                </Col>
                <Col>
                    <h4>+ SKILLS AND TECHNOLOGIES</h4>
                    <h5>Day to Day Comforts</h5>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>GitHub</li>
                        <li>Stuff</li>
                        <li>Things</li>
                    </ul>
                    <h5>Experience With</h5>
                    <ul>
                        <li>Cool</li>
                        <li>Skills</li>
                        <li>Big</li>
                        <li>Wow</li>
                        <li>Impressive</li>
                    </ul>
                </Col>
                <Col>
                    <h4>+ Recent Projects</h4>
                    <h5>Lego Millennium Falcon</h5>
                    <p>Built a 7541 piece Millennium Falcon(largest to date)</p>
                    <h5>Personal PC</h5>
                    <p>Built personal PC. Utilized the PC building community to research and build a PC suitable to my
                        needs with room for future additions</p>
                    <h5>Coming Soon</h5>
                    <p>Learning Javascript to improve on previously made websites</p>
                </Col>
        </Row>
    </section>
  );
}

export default Resume