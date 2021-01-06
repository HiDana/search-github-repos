import React, { ReactElement, useState, useEffect } from "react";
import styled from "styled-components";

interface SearchBarProps {
  setInfo: (txt: string) => void;
}

export const SearchBar = ({ setInfo }: SearchBarProps): ReactElement => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setInfo(message), 700);
    return () => clearTimeout(timer);
  }, [message]);
  return (
    <SearchBarStyle
      type="text"
      placeholder="查詢 github repo"
      onChange={(e) => setMessage(e.target.value)}
    ></SearchBarStyle>
  );
};

const SearchBarStyle = styled.input`
  border: 1px solid #dddddd;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding: 0 10px;
`;
