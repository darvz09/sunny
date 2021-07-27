import styled from "styled-components";
export const FeatureWraps = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 968px) {
        width: 100%;
        margin-top:0;
        


    }
`;
export const FeatureRow = styled.div`
    width: 100%;
    display:flex;
    flex: wrap;
    align-items: center;
        @media screen and (max-width: 960px) {
            width: 100%;
            flex-direction: column;
        }

`;
export const FeatureCol = styled.div`
    flex: 1;
    position: relative;
    max-width: 50%;
    flex-basis: 50%;
    display:flex;
    flex-direction: column;
    align-items: center;



    @media screen and (max-width: 968px) {
        width: 100%;
        max-width:100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;



export const WrapDesign = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;



  @media screen and (max-width: 968px) {
    position: relative;
    text-align: center;
    max-width: 100%;

}

`;

export const WrapText = styled.div`
    text-align: center;
    position: absolute;
    bottom: 4rem;
    width: 400px;



    @media screen and (max-width: 968px) {
    width: 100%;
    margin: 4rem auto;
    padding-left: 30px;
    padding-right: 30px;

}



`;
export const ImgF = styled.img`
    width: 100%;
    max-width: 100%;
    min-height: 100vh;
    object-fit: cover;



`;
export const Heading = styled.div`
            line-height: 3;
            color:${({ HText }) => (HText ? ' hsl(167, 40%, 24%)' : 'hsl(198, 62%, 26%)')};
            font-weight: 700;
            font-size: 2.5rem;
`;

export const TextDescription = styled.div`
            line-height: 1.5;
            color:${({ PText }) => (PText ? ' hsl(167, 40%, 24%)' : 'hsl(198, 62%, 26%)')};
            font-size: 20px;
            font-weight: 400;
`;