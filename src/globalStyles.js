import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    font-family: 'Source Sans Pro', sans-serif;
  }
`;


export const Container = styled.div`
  padding-right: 50px;
  padding-left: 50px;
  margin-right: auto;
  margin-left: auto;

  z-index: 1;

  width: 100%;
  max-width: 1300px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export default GlobalStyle;
