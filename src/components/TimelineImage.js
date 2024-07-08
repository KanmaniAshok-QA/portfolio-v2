import React from 'react';
import styled from 'styled-components';

const TimelineImageContainer = styled.div`
  max-width: 100%;
  margin: 2rem auto;
`;

const TimelineImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 800px;
`;

function TimelineImage({ src, alt }) {
  return (
    <TimelineImageContainer>
      <TimelineImg src={src} alt={alt} />
    </TimelineImageContainer>
  );
}

export default TimelineImage;