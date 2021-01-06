import React, { ReactElement } from "react";
import styled from "styled-components";
import { breakpoints } from "utils";

export const GithubRepoCard = (): ReactElement => {
  return (
    <GithubRepoCardStyle
      href="https://link.com.tw"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubRepoAvatarStyle>
        <img
          src="https://avatars1.githubusercontent.com/u/10575782?v=4"
          alt="name"
        />
      </GithubRepoAvatarStyle>
      <p>name</p>
      <h5>reponame</h5>
      <p>description</p>
    </GithubRepoCardStyle>
  );
};

const GithubRepoCardStyle = styled.a`
  height: 100px;
  border: 1px solid #cccccc;
  border-radius: 10px;
  display: grid;
  grid-template: repeat(3, auto) / 50px auto;
  grid-gap: 5px;
  padding: 10px;
  margin: 10px 0;
  h5 {
    color: #333333;
    font-size: 16px;
  }
  p {
    color: #aaaaaa;
    font-size: 12px;
  }

  @media (min-width: ${breakpoints.tablet}px) {
    height: 120px;
    grid-template: repeat(3, auto) / 70px auto;
    padding: 20px;
    &:hover {
      transition: 0.2s;
      border-color: transparent;
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
    }
  }
`;
const GithubRepoAvatarStyle = styled.div`
  --avatat-size: 40px;
  grid-row: 1/4;
  display: flex;
  align-items: center;
  img {
    width: var(--avatat-size);
    height: var(--avatat-size);
    border-radius: 50%;
    overflow: hidden;
  }
  @media (min-width: ${breakpoints.tablet}px) {
    --avatat-size: 60px;
  }
`;
