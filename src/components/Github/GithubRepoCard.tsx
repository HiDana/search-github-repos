import React, { ReactElement } from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import { breakpoints } from "utils";
import { repoType } from "types";

export const GithubRepoCard = ({ data }: { data: repoType }): ReactElement => {
  const { name, description, owner } = data;
  return (
    <GithubRepoCardStyle
      href="https://link.com.tw"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubRepoAvatarStyle>
        <LazyLoad height={100} once offset={100}>
          <img src={owner.avatar_url} alt={owner.login} />
        </LazyLoad>
      </GithubRepoAvatarStyle>
      <p>{owner.login}</p>
      <h5>{name}</h5>
      <p>{description}</p>
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
  h5,
  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    white-space: normal;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  h5 {
    color: #333333;
    font-size: 16px;
    -webkit-line-clamp: 1;
  }
  p {
    color: #aaaaaa;
    font-size: 12px;
    -webkit-line-clamp: 1;
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
