import React from 'react';
import styled from 'styled-components';
import HeroSection from './HeroSection';

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #0a192f; /* Set the background color to match header and footer */
  color: #ccd6f6; /* Set text color for better readability */

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BentoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  justify-content: center;
`;

const BentoItem = styled.div`
  background-color: #112240; /* Slightly lighter shade for contrast */
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  flex: 1 1 100px;
  max-width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  h3 {
    margin: 0 0 1rem 0;
    text-align: left;
    font-size: 1.2rem;
    color: #64ffda;
    font-weight: 500;
  }

  ul {
    margin: 0;
    padding-left: 1.2rem;
    text-align: left;
  }

  li {
    margin-bottom: 0.5rem;
    color: #ccd6f6;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

function Home() {
  const skills = [
    {
      category: "Technical Skills",
      items: [
        "Test planning",
        "Script creation",
        "Test execution & environment monitoring",
        "Defect tracking & report analysis",
        "Stakeholder and project management"
      ]
    },
    {
      category: "Test Management and Other Tools",
      items: [
        "Jira",
        "TestRail",
        "Microfocus Quality Center",
        "Confluence",
        "Git and GitHub",
        "Microfocus Loadrunner",
        "Apache JMeter",
        "SiteScope",
        "AppDynamics",
        "Grafana",
        "Google Lighthouse with puppeteer",
        "SoapUI",
        "Postman",
        "Jenkins"
      ]
    },
    {
      category: "Test Frameworks",
      items: ["E2E with Cypress"]
    },
    {
      category: "Web development and DB query Languages",
      items: ["Java", "Javascript", "HTML", "CSS", "SQL"]
    }
  ];

  return (
    <HomeContainer>
      <HeroSection />
      <h2>My Skills</h2>
      <BentoBox>
        {skills.map((skillGroup, index) => (
          <BentoItem key={index}>
            <h3>{skillGroup.category}</h3>
            <ul>
              {skillGroup.items.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </BentoItem>
        ))}
      </BentoBox>
    </HomeContainer>
  );
}

export default Home;
