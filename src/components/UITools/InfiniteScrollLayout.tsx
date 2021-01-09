import React, { ReactElement, ReactNode, useState, useEffect } from "react";
import styled from "styled-components";

interface SearchBarProps {
  isLoading: boolean;
  children: ReactNode;
  setTouchBottom: () => void;
}

export const InfiniteScrollLayout = ({
  children,
  isLoading,
  setTouchBottom,
}: SearchBarProps): ReactElement => {
  const [isTouchBottom, setIsTouchBottom] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;

    if (scrollTop + window.innerHeight + 1000 >= scrollHeight) {
      setIsTouchBottom(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    isTouchBottom && setTouchBottom();
    return () => {};
  }, [isTouchBottom]);

  useEffect(() => {
    !isLoading && setIsTouchBottom(false);
    return () => {};
  }, [isLoading]);

  return <InfiniteScrollLayoutStyle>{children}</InfiniteScrollLayoutStyle>;
};

const InfiniteScrollLayoutStyle = styled.section`
  margin-top: 20px;
`;
