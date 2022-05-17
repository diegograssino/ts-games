import React from "react";
import styled from "styled-components";

import TicTacToe from "../TicTacToe/TicTacToe";

const Main = (props: any) => {
  const Title1 = styled.h1`
    font-size: 2rem;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0px;
  `;

  const SubTitle = styled.p`
    font-size: 1rem;
    text-align: center;
    margin-top: 0.5rem;
  `;

  const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    background-color: aquamarine;
    color: black;
    margin: 0px;
    padding: 0px;
  `;

  const GlobalContainer = styled.div`
    min-height: 100vh;
    background-color: #f0f0f0;
    color: black;
    margin: 0px;
    padding: 0px;
  `;

  return (
    <GlobalContainer>
      <HeaderContainer>
        <Title1>GAMES IN TYPESCRIPT</Title1>
        <SubTitle>By Diego Grassino</SubTitle>
      </HeaderContainer>
      <main>
        <section>
          <article>
            <TicTacToe />
          </article>
        </section>
      </main>
    </GlobalContainer>
  );
};

export default Main;
