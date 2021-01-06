import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import { breakpoints } from "utils";

export const Loading = (): ReactElement => {
  return (
    <LoadingStyle>
      <LoadingCircleStyle></LoadingCircleStyle>
      <LodingLineStyle width="30%"></LodingLineStyle>
      <LodingLineStyle width="50%"></LodingLineStyle>
      <LodingLineStyle width="40%"></LodingLineStyle>
    </LoadingStyle>
  );
};

const loadingAnimation = keyframes`
  100% {
    background-position: 130px 0;
  }
`;

const LoadingStyle = styled.div`
  height: 100px;
  border: 1px solid #efefef;
  border-radius: 10px;
  display: grid;
  grid-template: repeat(3, auto) / 50px auto;
  grid-gap: 5px;
  padding: 10px;
  margin: 10px 0;
  @media (min-width: ${breakpoints.tablet}px) {
    height: 120px;
    grid-template: repeat(3, auto) / 70px auto;
    padding: 20px;
  }
`;
const LoadingCircleStyle = styled.div`
  --circle-size: 40px;
  width: var(--circle-size);
  height: var(--circle-size);
  border-radius: 50%;
  background-color: #efefef;
  grid-row: 1/4;
  @media (min-width: ${breakpoints.tablet}px) {
    --circle-size: 60px;
  }
`;
const LodingLineStyle = styled.div<{ width: string }>`
  width: ${({ width }): string => width};
  height: 12px;
  background: linear-gradient(
      50deg,
      #efefef 0,
      #efefef 10px,
      #fafafa 20px,
      #fafafa 30px,
      #efefef 40px,
      #efefef 150px
    ) -20px 0/150px 12px;

  animation: ${loadingAnimation} 0.6s linear infinite;
`;
