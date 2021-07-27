import styled from "styled-components";

export const InfoSection = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 968px) {
        width: 100%;
    }
`;
export const InfoWrap = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
  width: 100%;

    
`;
export const InfoRow = styled.div`
    width: 100%;
    display:flex;
    flex: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
        @media screen and (max-width: 960px) {
            width: 100%;
            flex-direction: column-reverse;
        }

    `;
export const Column = styled.div`
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;
     display: flex;
    justify-content:center; 

    @media screen and (max-width: 968px) {
        width: 100%;
        max-width:100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    } 
`;

export const TextWrap = styled.div`
    opacity: ${({ fade }) => (fade ? '0' : '1')};
    max-width: 600px;
    min-height: 100vh;
    margin: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content:center;
    transition: all 3s ease;

    @media screen and (max-width: 968px) {
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        text-align: center;
        padding-left: 30px;
        padding-right: 30px;
    } 

`;
export const Heading = styled.p`
    font-family: 'Fraunces', serif;
    font-weight: 700;
    font-size: 3rem;
    color: hsl(212, 27%, 19%);
    line-height: 1.2;
    padding-bottom: 2rem;
    

`;
export const Subtitle = styled.div` 
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5;
    color:hsl(232, 10%, 55%);
    padding-bottom: 2rem;
`;
export const BtnWrap = styled.div`
    
`;
export const BtnLink = styled.div`
  position: relative;
  border: none;
  background-color: transparent;
  color: hsl(212, 27%, 19%);
  font-size:  1.5rem;
  font-weight:700;
  width: 180px;
  cursor: pointer;
  z-index: 1;
  outline: none;

  ::before {
  content: "";
  position: absolute;
  bottom: -3px;
  left: -12px;
  width: 200px;
  height: 10px;
  border-radius: 50px;
  opacity: .2;
  background-color: ${({ bgC }) => (bgC ? 'hsl(51, 100%, 49%)' : 'hsl(7, 99%, 70%)')};
  }

`;


export const TheImgs = styled.img`
    width:100%;
    max-width:100%;
    min-height: 100vh;
    object-fit: cover;

`;