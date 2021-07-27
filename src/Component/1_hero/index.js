import React from 'react'
import arrow from '../../desktop/arrow.png';

import { Container } from '../GlobalStyles';
import {
    HeroContainer,
    HeroWrap,
    TextWrap,
    IconWrap,
    ArrowIcon
} from './heroElement';
const Hero = () => {
    return (
        <>
        <HeroContainer>
            <Container>
                    <HeroWrap>
                        <TextWrap>
                            <p>WE ARE CREATIVES darvs</p>
                        </TextWrap>
                        <IconWrap>
                            <ArrowIcon src={arrow} alt="" />
                        </IconWrap>
                </HeroWrap>
            </Container>
            </HeroContainer>
        </>    
    )
}

export default Hero
