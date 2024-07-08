import React from 'react';
import styled from 'styled-components';

const LeftPaneContainer = styled.div`
  width: 250px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #f0f0f0;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Name = styled.h2`
  margin: 10px 0;
`;

const Title = styled.p`
  margin: 0;
  font-style: italic;
`;

function LeftPane() {
  return (
    <LeftPaneContainer>
      <ProfileImage src="./images/Kanmani-photo.png" alt="Kanmani" />
      <Name>Kanmani Ashok</Name>
      <Title>QA Engineer</Title>
    </LeftPaneContainer>
  );
}

export default LeftPane;