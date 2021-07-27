import React from 'react'
import {
    FooterContainer,
    FtrLogo,
    FtrWrap,
    FtrLinkItems,
    FtrLink,
    SocialMediaIWrap,
    SocialIconLInks,

} from './FooterElement';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaPinterest

} from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            <FtrLogo>sunnyside</FtrLogo>
            <FtrWrap>
                <FtrLinkItems>
                    <FtrLink>About</FtrLink>
                </FtrLinkItems>
                <FtrLinkItems>
                    <FtrLink>Services</FtrLink>
                </FtrLinkItems>
                <FtrLinkItems>
                    <FtrLink>Projects</FtrLink>
                </FtrLinkItems>
            </FtrWrap>
            <SocialMediaIWrap>
                <SocialIconLInks>
                    <FaFacebook />
                </SocialIconLInks>
                <SocialIconLInks>
                    <FaInstagram />
                </SocialIconLInks>
                <SocialIconLInks>
                    <FaTwitter />
                </SocialIconLInks>
                <SocialIconLInks>
                    <FaPinterest />
                </SocialIconLInks>
            </SocialMediaIWrap>

        </FooterContainer>
    )
}

export default Footer
