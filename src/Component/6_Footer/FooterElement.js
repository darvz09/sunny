import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
    width: 100%;
    height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #8BD2C4;


`;

export const FtrLogo = styled.div`
    font-size: 2.5em;
    color: hsl(168, 34%, 41%);
    line-height: 2;
`;
export const FtrWrap = styled.div`
    display: flex;
`;
export const FtrLinkItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const FtrLink = styled(Link)`
    text-decoration: none;
    margin:2rem;
    color: hsl(168, 34%, 41%);
    font-size: 1.2em;
    font-weight: 500;


`;
export const SocialMediaIWrap = styled.div`
    display: flex;
`;
export const SocialIconLInks = styled.div`
    text-decoration: none;
    margin: 2rem 1.5rem;
    color: hsl(168, 34%, 41%);
    font-size: 1.8em;
    font-weight: 500;
`;
