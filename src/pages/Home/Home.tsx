import React from "react";

import TicTacToe from "../../components/TicTacToe/TicTacToe";

import {Styled} from "./Home.styled";
function Home(): JSX.Element {
  return (
    <Styled>
      <header>
        <h1>TYPE-SCRIPT-TOE</h1>
      </header>
      <main>
        <section>
          <article>
            <TicTacToe />
          </article>
        </section>
      </main>
    </Styled>
  );
}

export default Home;
