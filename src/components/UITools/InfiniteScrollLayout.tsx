import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface SearchBarProps {
  children: ReactNode;
}
export const InfiniteScrollLayout = ({
  children,
}: SearchBarProps): ReactElement => {
  return <InfiniteScrollLayoutStyle>{children}</InfiniteScrollLayoutStyle>;
};

const InfiniteScrollLayoutStyle = styled.div`
  margin-top: 20px;
`;
