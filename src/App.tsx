import React from "react";
import styled from "styled-components";
import { Home } from "pages/Home";

function App() {
  return (
    <AppStyle>
      <Home />
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
