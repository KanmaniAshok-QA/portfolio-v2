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
  transition: transform 0.3s ease-in-out;
`;


const BentoItem = styled.a`
  display: flex;
  flex-direction: column;
  background-color: #112240;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-decoration: none;
  color: #ccd6f6;
  height: 500px; // Fixed height for all bento boxes
  width: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 200px; // Fixed height for all project images
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
  flex-grow: 1;
  overflow-y: auto; // Allow scrolling if content overflows
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
  flex-grow: 1;
  overflow-y: auto; // Allow scrolling if description is too long
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

/*
const ArrowButton = styled.button`
  background: none;
  border: none;
  color: #8892b0;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  padding: 1rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #64ffda;
  }

  &:focus {
    outline: none;
  }

  ${props => props.direction === 'left' ? 'left: 0;' : 'right: 0;'}

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.5rem;
    background-color: rgba(10, 25, 47, 0.7);
    border-radius: ${props => props.direction === 'left' ? '0 50% 50% 0' : '50% 0 0 50%'};
    ${props => props.direction === 'left' ? 'left: 0;' : 'right: 0;'}
    width: 40px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

*/

const ProjectsWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;

function Projects() {
  /*const [currentIndex, setCurrentIndex] = useState(0);*/
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'Developed a responsive, cross-browser compatible, single-page portfolio website to showcase my professional journey, skills, and projects.',
      tools: ['React', 'Styled-components', 'HTML5', 'CSS3', 'git', 'Github Pages'],
      year: 2024,
      image: process.env.PUBLIC_URL + '/portfolio.jpg',
      link: 'https://github.com/kanmaniashokqa/portfolio-v2/tree/master'
    },
    {
      id: 2,
      title: 'Cypress test suite with mochawesome reporter',
      description: 'Automated few use cases of the Check24 website using Cypress with Mochawesome reporting. The test script chooses random tarrifs from providers and does a comparison.',
      tools: ['Cypress e2e', 'Mochawesome', 'Node.js', 'npm', 'git', 'GitHub'],
      year: 2024,
      image: process.env.PUBLIC_URL + '/project1.png',
      link: 'https://github.com/kanmaniashokqa/cypress-reports/blob/master/README.md'
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

  /*

  const projectsPerPage = 3; // Adjust this number based on how many projects you want to show at once
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextProjects = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevProjects = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const currentProjects = projects.slice(
    currentIndex * projectsPerPage,
    (currentIndex + 1) * projectsPerPage
  );
  */

  return (
    <ProjectsContainer>
      <Title>🌟 Tech Showcase: My Coding Highlights</Title>
      <ProjectsWrapper>
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
      </ProjectsWrapper>
    </ProjectsContainer>
  );
}

export default Projects;