import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
`;

const TimelineItem = styled.div`
  display: flex;
  padding: 20px 30px;
  position: relative;
  background: #112240;
  border-radius: 6px;
  margin: 10px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #ccd6f6;

  @media (max-width: 600px) {
    flex-direction: column;
    padding-left: 30px;
    padding-right: 25px;
  }
`;

const LogoContainer = styled.div`
  flex: 0 0 100px;
  margin-right: 20px;

  @media (max-width: 600px) {
    margin-bottom: 15px;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const TimelineDate = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #8892b0;
  display: block;
  margin-bottom: 10px;
`;

const TimelineTitle = styled.h3`
  margin: 0;
  padding: 0;
  color: #64ffda;
  font-size: 1.5rem;
`;

const TimelineDescription = styled.p`
  margin: 10px 0 0;
  color: #8892b0;
`;

const Timeline = ({ events }) => {
  return (
    <TimelineContainer>
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <LogoContainer>
            <Logo src={event.logo} alt={`${event.company} logo`} />
          </LogoContainer>
          <ContentContainer>
            <TimelineDate>{event.date}</TimelineDate>
            <TimelineTitle>{event.title}</TimelineTitle>
            <TimelineDescription>{event.description}</TimelineDescription>
          </ContentContainer>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;