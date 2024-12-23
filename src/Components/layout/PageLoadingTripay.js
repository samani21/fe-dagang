import styled from "styled-components";

export const PayLoadingContainer = styled.div`
height: 100%;
display: grid;
align-items: center;
justify-content: center;
`;

export const LoadingContainer = styled.div`
display: grid;
justify-content: center;
align-items: center;
justify-items: center;
`;

export const TextLoadingPay = styled.p`
width: 280px;
height: 48px;
font-family: var(--TypographyFontFamilyfont-family-1);
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: center;
`
export const AnimiasLoading = styled.img`
width: 50px;
`

export const PayListContainer = styled.div`
width: Fill (280px)px;
height: 100%;
padding: 20px;
`;

export const TitleContainer = styled.div`
width: 100%;
padding: 20px;
border-bottom: 1px solid var(--Color-Primitive-Neutral-neutral-200, #E5E5E5);
margin-bottom: 20px;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Price = styled.div`

`

export const TitleTransaction = styled.p`
width: 100%;
font-family: var(--TypographyFontFamilyfont-family-1);
font-size: 30px;
font-weight: 600;
line-height: 24px;
text-align: left;
`;
export const PayList = styled.div`
border: 1px solid var(--Color-Primitive-Neutral-neutral-200, #E5E5E5);
border-radius: 20px;
margin-bottom: 20px;
padding: 10px;
cursor: pointer;
`;

export const InstruksiContainer = styled.div`
overflow-x: auto;
height: 600px;
&::-webkit-scrollbar {
      display: none;
    }
`