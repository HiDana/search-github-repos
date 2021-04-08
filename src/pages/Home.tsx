import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import {
  SearchBar,
  GithubRepoCard,
  InfiniteScrollLayout,
  Loading,
} from "components";

import { repoType } from "types";
import { useGetRemoteData } from "utils";

export const Home = (): ReactElement => {
  const [searchInfo, setSearchInfo] = useState("");
  const [page, setPage] = useState(1);

  const { responseData, reposCount, isLoading } = useGetRemoteData(
    searchInfo,
    page
  );

  const isAllDisplay = page * 20 >= reposCount;

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
        {responseData.map((data: repoType, i: number) => (
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
