import styled from "styled-components";





export const TestimonialSection = styled.div`
  width: 100vw;
  min-height: 100vh;
  text-align: center;
  display:flex;
  align-items: center;
  justify-content: center;



    
    @media screen and (max-width: 968px) {
        width: 100%;
        padding: 0 4rem;


    }

`;

export const ClntContainer = styled.h1`
    width: 1400px;


    

`;
export const ClntHeading = styled.h1`
    line-height: 2;
    font-size: 2rem;
    font-weight: 700;
    color:hsl(210, 4%, 67%);
    margin: 4rem 0; 

    

`;
export const ClntRow = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;


`;
export const ClntCard = styled.div`
    text-align: center;
    width: 350px;
    margin: 1rem;
    
    @media screen and (max-width: 968px) {
        width: 100%;
        margin: 1.5rem;

    }

`;
export const ClntImg = styled.img`
    border-radius: 8rem;
    width: 100px;
    height: 100px;
`;
export const ClntInfo = styled.div`
    line-height: 1.5;
    margin:1rem;

`;
export const ClntDesc = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: hsl(213, 9%, 39%);

`;
export const ClntName = styled.div`
    margin-top: 2rem;
    font-size: 24px;
    font-weight: 700;
    color:hsl(212, 27%, 19%);
`;
export const ClntTitle = styled.div`
    line-height: 2;
    font-size: 16px;
    font-weight: 400;
    color:hsl(210, 4%, 67%);
    `;


