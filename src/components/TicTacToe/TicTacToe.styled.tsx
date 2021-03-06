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
    background-color: #f8cb2e;
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
    cursor: pointer;
  }
  .game-title {
    margin: 20px 0px 0px 0px;
  }
  .btn-reset {
    margin: 10px 0px 0px 10px;
    background-color: #b22727;
    color: white;
    border-radius: 5px;
    padding: 5px 10px 5px 10px;
    display: inline-block;
    transition: background-color 0.25s ease;
    cursor: pointer;
    &:hover {
      background-color: #ee5007;
    }
    &:active {
      background-color: #b22727;
      color: gray;
    }
  }
`;
