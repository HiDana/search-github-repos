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
  const [page, setPage] = useState(1);

  const getReposData = async (info: string, page: number) => {
    page === 1 && setReposData([]);
    setIsLoading(true);
    try {
      const response = await getSearchReposApi(info, page);
      if (response.kind === "ok") {
        if (page === 1) {
          setReposData(response.data.items);
        } else {
          setReposData([...reposData, ...response.data.items]);
        }
      }
    } catch (e) {
      console.log("e", e);
    } finally {
      setIsLoading(false);
    }
  };

  const loadNewPage = (currentPage: number) => {
    if (!isLoading) {
      setPage(currentPage + 1);
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
        setSearchInfo={(txt: string) => {
          setSearchInfo(txt);
          // TODO newtxt set page1
          // setPage(1);
        }}
      />
      {console.log("page", page)}

      <InfiniteScrollLayout
        isLoading={isLoading}
        setTouchBottom={() => loadNewPage(page)}
      >
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
