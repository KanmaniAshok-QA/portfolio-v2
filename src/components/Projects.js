import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background-color: #0a192f;
  color: #ccd6f6;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  font-weight: 200;
  color: #ccd6f6;
  margin-bottom: 2rem;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BentoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const BentoItem = styled.a`
  display: flex;
  background-color: #112240;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-decoration: none;
  color: #ccd6f6;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ProjectImage = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;

  @media (max-width: 600px) {
    width: 100%;
    height: 200px;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectYear = styled.span`
  font-size: 0.9rem;
  color: #8892b0;
  margin-bottom: 0.5rem;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: #64ffda;
  font-weight: 700;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  margin: 0;
`;

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Attendance tracker - Google Extension ',
      description: 'Built an time tracking chrome extension which submits the start and end time to a third party application',
      year: 2023,
      image: process.env.PUBLIC_URL + '/project1.jpg', // Replace with actual image path
      link: '#' // Replace with actual project link
    },
    {
      id: 2,
      title: 'UI testing for single page applications',
      description: 'Implemented Google Lighthouse + Puppeteer for UI testing of a web application',
      year: 2021,
      image: process.env.PUBLIC_URL + '/project2.png', // Replace with actual image path
      link: '#' // Replace with actual project link
    }
    // Add more projects as needed
  ];

  return (
    <ProjectsContainer>
      <Title>🌟 Tech Showcase: My Coding Highlights</Title>
      <BentoBox>
        {projects.map(project => (
          <BentoItem key={project.id} href={project.link} target="_blank" rel="noopener noreferrer">
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectContent>
              <ProjectYear>{project.year}</ProjectYear>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectContent>
          </BentoItem>
        ))}
      </BentoBox>
    </ProjectsContainer>
  );
}

export default Projects;


