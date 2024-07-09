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
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 1rem;
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const TextContent = styled.div`
  p {
    font-weight: 300;
    color: #E2E8F0;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const Highlight = styled.span`
  color: #4FD1C5;
  font-weight: 500;
`;

const Link = styled.a`
  color: #4FD1C5;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function About() {
  return (
    <AboutContainer>
      <ImageContainer>
        <Image src={require("./about.jpg")} alt="Kanmani Ashok" />
      </ImageContainer>
      <ContentContainer>
        <Title>About</Title>
        <TextContent>
          <p>
            Hello, I'm <Highlight>Kanmani Ashok</Highlight>, a passionate <Highlight>Software Test Engineer</Highlight> with 8 years of experience in ensuring software quality for web and mobile applications.
          </p>
          <p>
            My journey has taken me from the bustling tech scene of Chennai to the innovative landscape of Munich, where I currently live. I'm passionate about <Highlight>quality assurance</Highlight> and <Highlight>software development</Highlight>, always striving to bridge the gap between these two crucial aspects of software creation.
          </p>
          <p>
            I thrive in collaborative environments and enjoy working with diverse teams. Let's connect and explore opportunities to innovate together!
          </p>
          <p>
            When I'm not coding or testing, you'll find me in the kitchen, channeling my creativity into making fresh pasta or exploring Munich with my family. I'm also tackling the exciting challenges of parenthood, which has taught me more about problem-solving than any software bug ever could!
          </p>
        </TextContent>
      </ContentContainer>
    </AboutContainer>
  );
}

export default About;