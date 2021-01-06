import React, { ReactElement, useState, useEffect } from "react";
import styled from "styled-components";

interface SearchBarProps {
  setSearchInfo: (txt: string) => void;
}

export const SearchBar = ({ setSearchInfo }: SearchBarProps): ReactElement => {
  const [message, setMessage] = useState("");
  // TODO 放在 useEffect 跟 function 的差別
  // const handlaTyping = (txt: string) => {
  //   let typingTimer;
  //   clearTimeout(typingTimer);
  //   typingTimer = setTimeout(() => doneTyping(), 2000);
  //   // console.log("typingTimer", typingTimer);
  // };
  // const doneTyping = () => {
  //   console.log("doneTyping");
  // };

  useEffect(() => {
    // if (message === "") return;
    const timer = setTimeout(() => setSearchInfo(message), 700);
    return () => clearTimeout(timer);
  }, [message, setSearchInfo]);
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
