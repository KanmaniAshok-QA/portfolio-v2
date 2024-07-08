import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Typed from 'typed.js';

const HeroContainer = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #0a192f;
  color: #ccd6f6;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled(motion.h1)`
  font-weight: 200;
  color: #64ffda;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-size: 2.0rem;

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

const TypedWrapper = styled.span`
  color: #64ffda;
  font-weight: 500;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 20px 2px 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: white;
    color: #0a192f;
  }

  svg {
    margin-right: 8px;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const HeroSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Functional testing', 'Automation', 'Performance testing','and Mobile App testing'],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <HeroContainer>
      <Title
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Software Test Engineer
      </Title>
      <Subtitle>
        I specialise in {''}
        <TypedWrapper>
          <span ref={typedRef}></span>
        </TypedWrapper>
      </Subtitle>
      <DownloadButton href="/Resume.pdf" download="Resume.pdf">
        <Download size={20} />
        Download CV
      </DownloadButton>
    </HeroContainer>
  );
};

export default HeroSection;