import React from 'react';
import {
    InfoSection,
    InfoWrap,
    InfoRow,
    Column,
    TextWrap,
    Heading,
    Subtitle,
    BtnWrap,
    TheImgs,
    BtnLink

} from './AboutElements'

const About = ({ Line1,
    description,
    BtnLabel,
    img,
    imgStart,
    bgC,
    alt
}) => {



    return (
        <InfoSection>
            <InfoWrap>
                <InfoRow imgStart={imgStart} >
                    <Column>
                        <TextWrap >
                            <Heading>{Line1}</Heading>
                            <Subtitle>{description}</Subtitle>
                            <BtnWrap>
                                <BtnLink bgC={bgC}>{BtnLabel}</BtnLink>
                            </BtnWrap>
                        </TextWrap>
                    </Column>
                    <Column>
                        <TheImgs src={img} alt={alt} />
                    </Column>
                </InfoRow>
                </InfoWrap>
        </InfoSection>
    )
}

export default About
