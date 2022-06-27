import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projectData';
import { Row } from 'react-bootstrap'

const Portfolio = () => {
  return (
    <div className="page">
      <h1>Portfolio</h1>
      <Row>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </Row>
    </div>
  );
}

export default Portfolio