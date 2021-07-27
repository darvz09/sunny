import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
    background: ${({ scrollNav}) => (scrollNav ? '#3CBDFF' : 'transparent')};
    height:100px;
    margin-top: -100px;
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 999;
`;
export const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  max-width: 1400px;
  width:100%;
  margin-left: 30px;
  margin-right: 30px;
  


  @media screen and (max-width: 960px){
    margin: 0px;
  width: 100%;
  padding: 0 30px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  }

`;
export const NavBrand = styled.div`
  color: hsl(0, 0%, 100%);
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-decoration: none;
  list-style: none;

  @media screen and (max-width: 960px) {
    background: #3EBFFE;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 100%;
    height: 90vh;
    margin-right:0px;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    

  }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        color: hsl(0, 0%, 100%);
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size:1.8rem;
        cursor: pointer;
    }
`;
export const NavItem = styled.li`
  display: ${({ show }) => (show ?'flex' : 'none')};
  align-items: center;
  list-style: none;
  color: hsl(0, 0%, 100%);
  font-weight: 400;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #fad400;
  }
@media screen and (max-width: 960px){
    width: 100%;

    &:hover{
        border: none;                                                                                                                             
    }
}

`;
export const NavLinks = styled(Link)`
    color: hsl(0, 0%, 100%);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height:100%;

    &:hover {
    color: #fad400;
  }

    @media screen and (max-width: 960px){
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color:#fad400;
            transition: all 0.3s ease;
        }
    }
`;

export const NavItemBtn = styled.li`
  text-decoration:none;
  list-style: none;
@media screen and (max-width: 960px) {
  display:none;
}
`;
export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;