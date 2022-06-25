import React from 'react'
import { Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <section className="page">
      <h2 className="title">Welcome to my Site!</h2>
      <Row>
        <Col lg={4} md={3}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/portfolio image.jpg`}
            alt=""
          />
        </Col>
        <Col lg={8} md={9}>
          <h5>My name is Will</h5>
          <p>
            I am a 26 year old always trying to learn new technologies, skills,
            and languages. This way I can stay in the forefront of the evolving
            tech atmosphere.
          </p>
          <p>
            The prospect of making something from nothing is what drives my
            passion for code and development. I am currently enrolled in the
            Michigan State University Boot Camp. I've been around computers my
            whole life, but mainly used them for gaming and exploring the web.
          </p>
          <p>
            I was born and raised in London, England until I moved to the US at
            13. Since then I've moved from coast to coast, but have finally set
            up home in Glendale, AZ.
          </p>
          <p>
            When I'm not working, I am can be found spending time with my wife
            and our 9 dogs, playing video games, re-watching my favorite
            trilogy, or reading fantasy novels.
          </p>
        </Col>
      </Row>
    </section>
  );
}

export default About
