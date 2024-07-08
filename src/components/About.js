import React from 'react';
import styled from 'styled-components';
import TimelineImage from './TimelineImage';

const AboutContainer = styled.div`
  text-align: center;
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
  font-weight: 300;
  color: #64ffda;
  margin-bottom: 1rem;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-weight: 300;
  color: #ccd6f6;
  margin-bottom: 2rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

function About() {
  return (
    <AboutContainer>
      <Title>About Me</Title>
      <Subtitle>Hi, I am Kanmani Ashok. Here's a brief description about myself.</Subtitle>
      <Title>My Journey</Title>
      <TimelineImage 
        src="/timeline.png" 
        alt="Kanmani Ashok's professional journey"
      />
    </AboutContainer>
  );
}

export default About;