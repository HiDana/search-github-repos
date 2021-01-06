import React, { ReactElement, useState, useEffect } from "react";
import styled from "styled-components";
import {
  SearchBar,
  GithubRepoCard,
  InfiniteScrollLayout,
  Loading,
} from "components";
import { getSearchReposApi } from "services";

export const Home = (): ReactElement => {
  const [searchTxt, setSearchTxt] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if (searchTxt === "") {
      setIsEmpty(true);
    } else {
      // getSearchReposApi();
      console.log("searchTxt");
    }

    return () => {};
  }, [searchTxt]);
  return (
    <HomeStyle>
      <SearchBar setSearchTxt={(txt: string) => setSearchTxt(txt)} />
      <InfiniteScrollLayout>
        <Loading />
        <GithubRepoCard />
        <GithubRepoCard />
        <GithubRepoCard />
      </InfiniteScrollLayout>
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  border: 1px solid #a00;
  width: 100%;
  max-width: 600px;
  padding: 20px;
`;
