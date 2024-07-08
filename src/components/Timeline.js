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
  padding: 20px 30px;
  position: relative;
  background: #112240;
  border-radius: 6px;
  margin: 10px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #ccd6f6;

  &:after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -12.5px;
    background-color: white;
    border: 4px solid #64ffda;
    top: 30px;
    border-radius: 50%;
    z-index: 1;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding-left: 30px;
    padding-right: 25px;
  }
`;

const TimelineDate = styled.span`
  position: absolute;
  top: 16px;
  font-size: 12px;
  font-weight: bold;
  right: 20px;
  color: #8892b0;

  @media (max-width: 600px) {
    top: 10px;
  }
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

const TimelineImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 6px;
`;

const Timeline = ({ events }) => {
  return (
    <TimelineContainer>
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineDate>{event.date}</TimelineDate>
          <TimelineTitle>{event.title}</TimelineTitle>
          <TimelineDescription>{event.description}</TimelineDescription>
          {event.image && <TimelineImage src={event.image} alt={event.title} />}
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;
