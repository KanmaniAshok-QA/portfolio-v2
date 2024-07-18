import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: transparent;
  color: #FFFFFF;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 300px;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    margin-bottom: 2rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  border: 4px solid #4FD1C5;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-weight: 200;
  color: #ccd6f6;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const TextContent = styled.div`
  p {
    font-weight: 100;
    color: #ccd6f6;
    margin-bottom: 1rem;
    font-size: 1.0rem;
    line-height: 1.6;
  }
`;


function About() {
  return (
    <AboutContainer>
      <ImageContainer>
        <Image src={require("./about.jpg")} alt="Kanmani Ashok" />
      </ImageContainer>
      <ContentContainer>
        <Title>🛠️ Crafting Quality: In Software and Life</Title>
        <TextContent>
          <p>
          I graduated with a Computer Science degree in 2013, ready to make my mark in the tech world. While my studies focused on software development, I found my calling in software testing and quality assurance.
          </p>
          <p>
          🌍 Career Path: Starting in Chennai's vibrant tech hub, I've gained valuable experience working with diverse teams on cutting-edge projects. Now, I'm excited to bring my skills to Munich's innovative tech scene, actively seeking new opportunities to contribute and grow.
          Manual testing, performance testing, test automation, web and mobile app testing, and software development form the core of my technical toolkit.
          </p>
          <p>
          👨‍👩‍👦 Life's Little Detours:
          In 2022, I embarked on an unexpected adventure: relocating to Munich with my family and taking on the role of primary caregiver for my son. 🌍✈️
          This career intermission has been an eye-opening experience. Who knew that raising a child would sharpen my problem-solving skills more than any software bug ever could? 🧠
          </p>
          <p>
          🚀 Projects and Achievements: Over the years, I've tackled complex web applications, cutting-edge mobile apps, and performance-critical systems. Each project has brought new challenges and opportunities to expand my technical toolkit.
          </p>
          <p>
          💻 Personal Projects: My passion for technology extends beyond my professional life. I've developed several personal projects that showcase my skills and creativity. I invite you to explore these projects in the dedicated section of my portfolio - they reflect my continuous learning and my ability to apply my skills to solve real-world problems.
          </p>
          <p>
          I'm eager to apply these skills to innovative projects that push the boundaries of what's possible in technology.
          </p>
        </TextContent>
      </ContentContainer>
    </AboutContainer>
  );
}

export default About;