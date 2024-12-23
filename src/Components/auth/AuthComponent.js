import styled from "styled-components";

export const LoginContainer = styled.div`
  background:black;
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: right;
  align-items: center;
  @media (max-width: 500px) {
    background:black;
    align-items: end;
  }
`;

export const LoginContentContainer = styled.div`
width: 40%;
margin-right: 15px;
height: 90%;
gap: 8px;
border-radius: 10px;
opacity: 0px;
background: var(--Color-Primitive-Base-white, #FFFFFF);
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 800px) {
  width: 95%;
  height: 95%;
  position: absolute;
}
@media (max-width: 500px) {
  width: 92%;
  height: 45%;
  position: absolute;
  justify-content: normal;
  margin-bottom: 20px;
}
`;

export const FormLoginContainer = styled.div`
width: 70%;
height: 70%;
gap: 8px;
opacity: 0px;
@media (max-width: 500px) {
  height: 80%;
  width: 100%;
  margin-left: 30px;
  margin-right: 30px;
  display: grid;
  justify-content: nomal;
  align-items: center;
}
@media (max-width: 325px) {
  margin-left: 15px;
  margin-right: 15px;
}
`;

export const TitleLogin = styled.p`
width: 100%;
height: 28px;
gap: 0px;
opacity: 0px;
//styleName: Label/text-l-lg;
font-family: Arial, Helvetica, sans-serif;
font-size: 20px;
font-weight: 600;
line-height: 28px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: var(--Color-Primitive-Neutral-neutral-900, #171717);
@media (max-width: 500px) {
  display: none;
}
`;

export const TitleLoginMobileContainer = styled.div`
 display: none;
@media (max-width: 500px) {
  width: 100%;
  display: block;
  height: 50px;
  margin-top: -20px;
  }
`;

export const TitleLoginMobile = styled.p`
  width: 100%;
  height: 32px;
  gap: 0px;
  opacity: 0px;
  //styleName: Heading/text-h-md;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: var(--Color-Primitive-Neutral-neutral-900, #171717);
  @media (max-width: 325px) {
    font-size: 22px;
  }

`;
export const SpanLoginMobile = styled.span`
width: 100%;
  height: 32px;
  gap: 0px;
  opacity: 0px;
  //styleName: Heading/text-h-md;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: var(--Color-Primitive-Neutral-neutral-900, #0d7794);
  @media (max-width: 325px) {
    font-size: 22px;
  }

`;

export const FormInputLogin = styled.div`

    width: 100%;
@media (max-width: 500px) {
  display: none;
}
`
export const FormInputLoginMobile = styled.div`
display: none;
@media (max-width: 500px) {
display: block;
  width: 100%;
}
`
export const TextReset = styled.p`
width: 100%;
height: 20px;
//styleName: Label/text-l-md;
font-family: Arial, Helvetica, sans-serif;
font-size: 14px;
font-weight: 600;
line-height: 20px;
text-align: right;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: var(--Color-Primitive-Neutral-neutral-900, #171717);
cursor: pointer;
@media (max-width: 500px) {
  display: none;
}
`;

export const WrapperLogin = styled.div`
position: relative;
  margin: 10px auto;
  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
`;


export const ButtonLogin = styled.button`
width: 100%;
height: Hug (40px)px;
padding: 10px 16px 10px 16px;
gap: 8px;
border-radius: 4px;
opacity: 0px;
background: var(--Color-Primitive-Brand-brand-600, #0d7794);
/* box-shadow: 0px 1px 2px 0px #07f3e3ff; */
border: 0px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
@media (max-width: 500px) {
  width: 100%;
}
`;

export const ImageAuth = styled.img`

`;

export const ButtonGoogle = styled.button`
width: 100%;
height: Hug (40px)px;
padding: 10px 16px 10px 16px;
gap: 8px;
border-radius: 4px;
border: 1px ;
background: var(--Color-Primitive-Base-white, #FFFFFF);
border: 1px solid var(--Color-Primitive-Neutral-neutral-300, #D4D4D4);
box-shadow: 0px 1px 2px 0px #13364e1A;
display: flex;
justify-content: center;
align-items: center;
`;

export const TextGoogle = styled.p`
width: 100%;
height: 0px;
gap: 0px;
opacity: 0px;
//styleName: Label/text-l-md;
font-family: Arial, Helvetica, sans-serif;
font-size: 14px;
font-weight: 600;
line-height: 0px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: var(--Color-Primitive-Neutral-neutral-900, #171717);
`;

export const TextAuth = styled.p`
width: 100%;
height: 0px;
gap: 0px;
opacity: 0px;
//styleName: Paragraph/text-p-md;
font-family: Arial, Helvetica, sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 0px;
text-align: center;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: var(--Color-Primitive-Neutral-neutral-900, #171717);
`;

export const SpanAuth = styled.span`
width: 42px;
height: 20px;
gap: 0px;
opacity: 0px;
//styleName: Paragraph/text-p-md;
font-family: Arial, Helvetica, sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 20px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: var(--Color-Primitive-Brand-brand-600, #0d7794);
cursor: pointer;
`;

export const PilihanAuth = styled.div`
@media (max-width: 500px) {
  display: none;
}
`;

export const ImageMobile = styled.div`
display: none;
@media (max-width: 500px) {
  display: inline;
  height: 100%;
width: 100%;
display: flex;
justify-content: center;  
}
`;

export const Image = styled.img`
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: right;
  align-items: start;
`;
export const Shadow = styled.div`
  background: linear-gradient(0deg, #11485e 0%, rgba(17, 94, 89, 0) 100%);
  width: 100%;
  height: 100%;
  position: fixed;
`;

export const TextMobile = styled.div`
display: none;
@media (max-width: 500px) {
  display: inline;
  width: 100%;
  margin-top: -40px;
}
`;

export const LabelAuth = styled.div`
@media (max-width: 500px) {
  display: none;
}
`;

export const InputContainerAuth = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem;
  width: 100%;
  background-color: #fff;
  padding: 10px 0px 10px 0px; 
  &:focus-within {
    border-color: #000000; /* Warna saat input difokuskan */
  }
`;

export const IconWrapperAuth = styled.div`
  margin-right: 0.5rem;
  color: #888;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const InputFieldAuth = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 1rem;
  color: #333;

  &::placeholder {
    color: #aaa;
  }
`;