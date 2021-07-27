import React from 'react'
import img1 from '../../desktop/Fimg2.jpg'
import img2 from '../../desktop/Fimg3.jpg'
import {
    FeatureWraps,
    FeatureRow,
    FeatureCol,
    WrapText,
    ImgF,
    WrapDesign,
    Heading,
    TextDescription


 } from './featureElements'

const Feature =() => {
    return (
        <FeatureWraps>
            <FeatureRow>
                <FeatureCol>
                    <WrapDesign>
                        <ImgF src={img1} alt='dddd'/>
                        <WrapText>
                        <Heading HText={true} >Graphic Design</Heading>
                        <TextDescription PText={true}> Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention </TextDescription>
                        </WrapText>
                    </WrapDesign>
                </FeatureCol>
                <FeatureCol>
                    <WrapDesign>
                        <ImgF src={img2} alt='dddd'/>
                        <WrapText>
                        <Heading HText={false}>Photography</Heading>
                        <TextDescription PText={false}> Increase your credibility by getting the most stunning, high quality photos that improve your business image </TextDescription>
                        </WrapText>
                    </WrapDesign>
                </FeatureCol>
            </FeatureRow>
        </FeatureWraps>
    )
}

export default Feature
