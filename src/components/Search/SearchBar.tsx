import React, { ReactElement } from "react";
import styled from "styled-components";

interface SearchBarProps {
  setSearchTxt: (txt: string) => void;
}

export const SearchBar = ({ setSearchTxt }: SearchBarProps): ReactElement => {
  // TODO 監管時間放在這裡
  return (
    <SearchBarStyle
      type="text"
      placeholder="查詢 github repo"
      onChange={(e) => setSearchTxt(e.target.value)}
    ></SearchBarStyle>
  );
};

const SearchBarStyle = styled.input`
  border: 1px solid #dddddd;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
`;
