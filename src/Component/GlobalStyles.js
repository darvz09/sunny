import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fraunces', serif;
    

    }
    
`;

export const Container = styled.div`
  max-width: 1200px;
  width:100%;


@media screen and (max-width: 960px) {
  width: 100%;
  display: flex;
  justify-content:center;
  padding-right: 100px;
  padding-left: 100px;
}

`;


export const Button = styled.button`
  border-radius: 16px;
  background: ${({ primary }) => (primary ? '#FFFCF8 ' : '#3EBFFE')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '10px 20px' : '12px 60px')};
  color: #111111;
  font-weight: 400;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  
  &:hover {
    transition: all 0.3s ease-out;
    Color: #fad400;
    border: solid 1px #fad400;
    background-color: ${({ primary }) => (primary ? ' #3EBFFE' : '#4B59F7')};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;  