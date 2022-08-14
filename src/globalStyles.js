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

export const Button = styled.button`
  border-radius: 4px;

  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};

  white-space: nowrap;

  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};

  outline: none;

  border: none;

  cursor: pointer;

  color: #fff;
  background: ${({ primary }) => (primary ? '#4b59f7' : '#0467fb')};

  &:hover {
    transition: all 0.3s ease-out;

    background: #fff;
    background: ${({ primary }) => (primary ? '#0467fb' : '#4b59f7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
