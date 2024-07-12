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
          In 2015, I stumbled into software testing, unaware it would lead me on a global adventure in tech. Today, I've got experience testing everything from websites to mobile apps, mastering manual, performance, and automation techniques along the way.
          </p>
          <p>
          My career has taken me from Chennai's vibrant tech hub to Munich's innovative scene. Each stop has added new skills to my professional toolkit, thanks to the diverse teams I've worked with.
          </p>
          <p>
          These days, I'm not just testing - I'm diving into coding and web development too. I love finding that sweet spot where thorough testing meets creative problem-solving. It's all about making software that not only works flawlessly but is built smartly and efficiently.
          </p>
          <p>
          When I'm not at work, I'm usually tinkering with personal coding projects. It's my way of keeping up with this fast-paced field and showing off my growing dev skills.
          </p>
          <p>
          Away from the computer, you might find me in the kitchen whipping up fresh pasta or baking cakes. Or I could be out exploring Munich with my family - we're always finding new adventures in our adopted home. And let's not forget the daily challenges of parenthood. Turns out, raising kids has taught me more about problem-solving than any software bug ever could!
          </p>
        </TextContent>
      </ContentContainer>
    </AboutContainer>
  );
}

export default About;