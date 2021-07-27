import React from 'react'
import {
    TestimonialSection,
    ClntContainer,
    ClntHeading,
    ClntRow,
    ClntCard,
    ClntImg,
    ClntInfo,
    ClntDesc,
    ClntName,
    ClntTitle,
}  from  './ClientElement'

const Clients = ({data}) => {
    return (
        <TestimonialSection>
            <ClntContainer>
                <ClntHeading>Clients Testimonials</ClntHeading>
                <ClntRow>
                    {data.map((Clnt, index) => {
                        return (
                        <ClntCard key={index}>
                                <ClntImg src={Clnt.img} alt={Clnt.alt}/>
                            <ClntInfo>
                                    <ClntDesc>{Clnt.Descp}</ClntDesc>
                                <ClntName>{Clnt.Name}</ClntName>
                                <ClntTitle>{Clnt.Job}</ClntTitle>
                            </ClntInfo>
                        </ClntCard>     
                        )
                    })}
                </ClntRow>
            </ClntContainer>    
        </TestimonialSection>
    )
}

export default Clients
