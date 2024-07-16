import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
`;

const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  position: relative;
  background: #112240;
  border-radius: 6px;
  margin: 10px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #ccd6f6;
`;

const ItemHeader = styled.div`
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  flex: 0 0 100px;
  width: 100px;
  height: 100px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    margin-bottom: 15px;
  }
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
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
  font-size: 1.2rem;
`;

const TimelineDescription = styled.ul`
  margin: 10px 0 0;
  color: #8892b0;
  padding-left: 150px;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #64ffda;
  cursor: pointer;
  font-size: 1.2rem;
  margin-left: auto;
  padding: 5px;
  display: flex;
  align-items: center;
`;

const Timeline = ({ events }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <TimelineContainer>
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <ItemHeader>
            <LogoContainer>
              <Logo src={event.logo} alt={`${event.company} logo`} />
            </LogoContainer>
            <ContentContainer>
              <TimelineDate>{event.date}</TimelineDate>
              <TimelineTitle>{event.title}</TimelineTitle>
            </ContentContainer>
            <ToggleButton onClick={() => toggleItem(index)}>
              {expandedItems[index] ? <FaChevronUp /> : <FaChevronDown />}
            </ToggleButton>
          </ItemHeader>
          {expandedItems[index] && (
            <TimelineDescription>
              {event.description.split('. ').map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </TimelineDescription>
          )}
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;