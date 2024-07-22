import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #0a192f;
  color: #ccd6f6;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  font-weight: 200;
  color: #64ffda;
  margin-bottom: 2rem;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BentoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const BentoItem = styled.a`
  display: grid;
  grid-template-rows: 200px 1fr;
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
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  ${BentoItem}:hover & {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  margin: 0 0 1rem 0;
`;

const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`;

const TechTag = styled.span`
  background-color: #1e2d3d;
  color: #8892b0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'Developed a responsive, cross-browser compatible, single-page portfolio website to showcase my professional journey, skills, and projects.',
      tools: ['React', 'Styled-components', 'HTML5', 'CSS3', 'Github Pages'],
      year: 2024,
      image: process.env.PUBLIC_URL + '/portfolio.jpg',
      link: 'https://github.com/kanmaniashokqa/portfolio-v2/tree/master'
    },
    {
      id: 2,
      title: 'Attendance tracker - Google Extension',
      description: 'Built a time tracking chrome extension which submits the start and end time to a third party application.',
      tools: ['JavaScript', 'HTML5', 'CSS3', 'Chrome API'],
      year: 2023,
      image: process.env.PUBLIC_URL + '/project1.jpg',
      link: '#'
    },
    {
      id: 3,
      title: 'UI performance testing for single page applications',
      description: 'Implemented Google Lighthouse + Puppeteer for UI testing of a web application.',
      tools: ['Google Lighthouse', 'Puppeteer', 'JavaScript', 'Node.js'],
      year: 2021,
      image: process.env.PUBLIC_URL + '/project2.png',
      link: '#'
    }
  ];

  return (
    <ProjectsContainer>
      <Title>🌟 Tech Showcase: My Coding Highlights</Title>
      <BentoBox>
        {projects.map(project => (
          <BentoItem key={project.id} href={project.link} target="_blank" rel="noopener noreferrer">
            <ProjectImageContainer>
              <ProjectImage src={project.image} alt={project.title} />
            </ProjectImageContainer>
            <ProjectContent>
              <div>
                <ProjectYear>{project.year}</ProjectYear>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </div>
              <ProjectTechnologies>
                {project.tools.map((tool, index) => (
                  <TechTag key={index}>{tool}</TechTag>
                ))}
              </ProjectTechnologies>
            </ProjectContent>
          </BentoItem>
        ))}
      </BentoBox>
    </ProjectsContainer>
  );
}

export default Projects;