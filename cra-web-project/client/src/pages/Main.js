import React from 'react';
import styled from '@emotion/styled';
import { FlexContainer } from 'styles/container/styles';

const Main = () => {
  return (
    <FlexContainer>
      <MainTitle>
        <br /> main
      </MainTitle>
    </FlexContainer>
  );
};

export default Main;

const MainTitle = styled.h2`
  font-size: 56px;
  font-weight: 500;
  text-align: center;
  & p {
    margin-top: 30px;
    font-size: 15px;
    color: #757575;
  }
`;
