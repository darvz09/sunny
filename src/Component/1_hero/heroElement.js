import styled from "styled-components";
import imgBg from '../../desktop/image-header.jpg'





export const HeroContainer = styled.div`
    background: url(${imgBg});
    height:100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content:center;

`;

export const HeroWrap = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    padding-bottom: 2em;

    @media screen and (max-width: 968px) {
        width: 100%;
        padding-right: 30px;
        padding-left: 30px;
    }

    
`;

export const TextWrap = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 4.5em;


    P {
        font-size:3.5rem;
        font-weight:700;
        color: #FFFCF8;

    }

    
    @media screen and (max-width: 968px) {
        width: 100%;
        padding-right: 30px;
        padding-left: 30px;
    }
`;
export const IconWrap = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const ArrowIcon = styled.img`

`;