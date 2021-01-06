import React, { ReactElement, useState, useEffect } from "react";
import styled from "styled-components";
import {
  SearchBar,
  GithubRepoCard,
  InfiniteScrollLayout,
  Loading,
} from "components";
import { getSearchReposApi } from "services";
import { repoType } from "types";

export const Home = (): ReactElement => {
  const [searchInfo, setSearchInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [reposData, setReposData] = useState<repoType[]>([]);

  const getReposData = async (info: string, page: number) => {
    setIsLoading(true);
    console.log("getReposData", info, page);
    try {
      page === 1 && setReposData([]);
      const response = await getSearchReposApi(info, page);
      if (response.kind === "ok") {
        setReposData(response.data.items);
      }
    } catch (e) {
      console.log("e", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchInfo === "") {
      setReposData([]);
    } else {
      console.log("useEffect");
      getReposData(searchInfo, 1);
    }
    return () => {};
  }, [searchInfo, setReposData]);
  return (
    <HomeStyle>
      <SearchBar setSearchInfo={(txt: string) => setSearchInfo(txt)} />
      <InfiniteScrollLayout>
        {reposData.map((data: repoType, i: number) => (
          <GithubRepoCard data={data} key={i} />
        ))}
        {isLoading && <Loading />}
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
