import React, {useState, useEffect} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../GlobalStyles';
import {
    Navbar,
    NavBrand,
    MobileIcon,
    NavWrap,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink,

} from './NavElements';
//darvin
const Nav = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    const [ scrollNav, setScrollNav ] = useState(false);
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    })
    return (
        <>
            <Navbar scrollNav={scrollNav}>
                    <NavWrap>
                        <NavBrand>
                            sunnyside ssss
                        </NavBrand>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem show={true}>
                                <NavLinks>About</NavLinks>
                            </NavItem>
                            <NavItem show={true}>
                                <NavLinks>Services</NavLinks>
                            </NavItem>
                            <NavItem show={true}>
                                <NavLinks>Projects</NavLinks>
                            </NavItem >
                            <NavItemBtn>
                                <NavBtnLink>
                                    <Button primary={true} big={true}>Contact Us</Button>
                                </NavBtnLink>
                            </NavItemBtn>
                    </NavMenu>
                    
                    
                    </NavWrap>
            </Navbar>
        </>
    )
}

export default Nav
