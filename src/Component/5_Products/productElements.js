import styled from "styled-components";


export const ProdContainer = styled.div`
    background: pink;
    width: 100%;
    min-height: 45vh;
`;
export const ProdRow = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 960px) {
            width: 100%;
            flex-direction: column;
        }

`;
export const ProdColumn = styled.div`
    width: 100%;


  
`;
export const Img1 = styled.img`
    width: 50%;
    height: 100%;


          `;
