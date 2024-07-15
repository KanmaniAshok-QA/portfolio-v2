import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HeroSection from './HeroSection';
import Timeline from './Timeline';

const HomeContainer = styled.div`
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

const BentoBoxContainer = styled.div`
  position: relative;
  margin-top: 2rem;
`;

const BentoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const BentoItem = styled.div`
  background-color: #112240;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  height: 300px; // Fixed height
  width: 250px; // Fixed width
  display: flex;
  flex-direction: column;
  overflow-y: auto;

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
    flex-grow: 1;
  }

  li {
    margin-bottom: 0.5rem;
    color: #ccd6f6;
  }

  @media (max-width: 768px) {
    flex: 0 0 250px;
    scroll-snap-align: start;
  }
`;

const SectionTitle = styled.h2`
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  color: #ccd6f6;
`;

const SliderButton = styled.button`
  background-color: rgba(100, 255, 218, 0.8);
  color: #0a192f;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  &:hover {
    background-color: rgba(100, 255, 218, 1);
  }

  &:disabled {
    background-color: rgba(42, 60, 90, 0.8);
    cursor: not-allowed;
  }

  &.prev {
    left: -20px;
  }

  &.next {
    right: -20px;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const skills = [
    {
      category: "Technical Skills",
      items: [
        "Test planning",
        "Script creation",
        "Test execution & environment monitoring",
        "Bug tracking & report analysis"
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

  const timelineEvents = [
    {
      date: '2022 - Present',
      title: 'Career Break for Parenting',
      company:"Munich, Germany",
      description: 'Took a planned career break to focus on family responsibilities and relocation to Munich',
      logo: process.env.PUBLIC_URL + '/CareerBreak.jpg',
    },
    {
      date: '2018 - 2022',
      title: 'Senior Test Engineer',
      company:"Cognizant Technology Solutions, India",
      description: 'Joined',
      logo: process.env.PUBLIC_URL + '/Cognizant.png',
    },
    {
      date: '2014 - 2018',
      title: 'Performance Test Analyst',
      company:"Hexaware Technologies Ltd., India",
      description: 'My first job as a Software test engineer.',
      logo: process.env.PUBLIC_URL + '/Hex.png',
    },
    {
      date: '2009 - 2013',
      title: 'Bachelor of Engineering in Computer Science',
      company:"Anna University, India",
      description: 'Graduated in CS with 8.2 CGPA',
      logo: process.env.PUBLIC_URL + '/College.png',
    },
  ];
  

  useEffect(() => {
    setTotalSlides(skills.length);
  }, [skills]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  };

  useEffect(() => {
    const bentoBox = document.querySelector('#bento-box');
    if (bentoBox) {
      bentoBox.scrollTo({
        left: currentSlide * 250, // 250px is the width of each BentoItem
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  return (
    <HomeContainer>
      <HeroSection />
      <SectionTitle>My Skills</SectionTitle>
      <BentoBoxContainer>
        <BentoBox id="bento-box">
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
        <SliderButton className="prev" onClick={handlePrev} disabled={currentSlide === 0}>
          <ChevronLeft size={24} />
        </SliderButton>
        <SliderButton className="next" onClick={handleNext} disabled={currentSlide === totalSlides - 1}>
          <ChevronRight size={24} />
        </SliderButton>
      </BentoBoxContainer>
      <SectionTitle>My Journey</SectionTitle>
        <Timeline events={timelineEvents} />
    </HomeContainer>
  );
}

export default Home;