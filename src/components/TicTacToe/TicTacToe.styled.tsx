import styled from "styled-components";

export const Styled = styled.div`
  /* Styles */
  .container {
    margin: 10px 0px 0px 10px;
  }
  .grid3x3 {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-gap: 2px;
    margin: 5px 0px 0px 0px;
  }

  .square {
    background-color: gray;
    color: white;
    border: 1px solid black;
    border-radius: 5px;
    height: 100px;
    width: 100px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 75px;
    font-weight: bold;
  }
  .game-title {
    margin: 20px 0px 0px 5px;
  }
`;
