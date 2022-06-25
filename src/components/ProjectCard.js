import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'

const ProjectCard = ({project}) => {
  console.log(project)
  return (
    // <Card>
    //   <h2>{project.title}</h2>
    //   <p>{project.description}</p>
    //   <img
    //     src={`${process.env.PUBLIC_URL}/Images/${project.image}`}
    //     alt={project.title}
    //   />
    //   <div>
    //     <a href={project.link} target="_blank" rel="noreferrer">
    //       Live Site
    //     </a>
    //     <a href={project.github} target="_blank" rel="noreferrer">
    //       GitHub Link
    //     </a>
    //   </div>
    // </Card>

    <Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center' >
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`${process.env.PUBLIC_URL}/Images/${project.image}`}
        />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <Button
            variant="link"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            Live Site
          </Button>
          <Button
            variant="link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProjectCard