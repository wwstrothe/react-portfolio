import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projectData';
import { Row } from 'react-bootstrap'

const Portfolio = () => {
  return (
    <div className="page">
      <h2>Portfolio</h2>
      <Row>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </Row>
    </div>
  );
}

export default Portfolio