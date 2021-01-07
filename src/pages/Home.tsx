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
  const [reposCount, setReposCount] = useState(0);
  const [page, setPage] = useState(1);
  const isAllDisplay = reposCount !== 0 && page * 20 >= reposCount;

  const getReposData = async (info: string, page: number) => {
    page === 1 && setReposData([]);
    setIsLoading(true);
    try {
      const response = await getSearchReposApi(info, page);
      if (response.kind === "ok") {
        if (page === 1) {
          setReposData(response.data.items);
          setReposCount(response.data.total_count);
        } else {
          setReposData([...reposData, ...response.data.items]);
        }
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchInfo === "") {
      setReposData([]);
    } else {
      getReposData(searchInfo, page);
    }
  }, [searchInfo, setReposData, page]);

  return (
    <HomeStyle>
      <SearchBar
        setInfo={(txt: string) => {
          setSearchInfo(txt);
          setPage(1);
        }}
      />

      <InfiniteScrollLayout
        isLoading={isLoading}
        setTouchBottom={() => !isLoading && !isAllDisplay && setPage(page + 1)}
      >
        {reposData.map((data: repoType, i: number) => (
          <GithubRepoCard data={data} key={i} />
        ))}

        {isLoading && <Loading />}

        {isAllDisplay && searchInfo !== "" && "沒u了"}
      </InfiniteScrollLayout>
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 20px;
`;
