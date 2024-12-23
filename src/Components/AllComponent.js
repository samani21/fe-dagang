import styled from "styled-components";

export const Label = styled.label`
width: 100%;
height: 20px;
gap: 0px;
opacity: 0px;
//styleName: Label/text-l-md;
font-family: Arial, Helvetica, sans-serif;
font-size: 14px;
font-weight: 600;
line-height: 20px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: var(--Color-Primitive-Neutral-neutral-900, #171717);
`;

export const Span = styled.span`
width: 8px;
height: 20px;
gap: 0px;
opacity: 0px;
//styleName: Label/text-l-md;
font-family: Arial, Helvetica, sans-serif;
font-size: 14px;
font-weight: 600;
line-height: 20px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: var(--Color-Primitive-Red-red-600, #DC2626);
`;

export const InputContainer = styled.div`
 display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem;
  width: 100%;
  max-width: 300px;
  background-color: #fff;

  &:focus-within {
    border-color: #007bff; /* Warna saat input difokuskan */
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px 0px 10px 0px; 
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
  padding-left:10px;
  &:focus {
    border-color: #000000; /* Warna border saat fokus */
  }
`;

export const IconPassword = styled.span`
  position: absolute;
  top: 65%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #aaa;

  &:hover {
    color: #6200ea;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export const TextButtonWhite = styled.div`
width: 45px;
height: 20px;
gap: 0px;
opacity: 0px;
//styleName: Label/text-l-md;
font-family: Arial, Helvetica, sans-serif;
font-size: 14px;
font-weight: 600;
line-height: 20px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: var(--Color-Primitive-Base-white, #FFFFFF);
`;

export const TextGray = styled.div`
width: 100%;
height: 20px;
gap: 0px;
opacity: 0px;
//styleName: Paragraph/text-p-md;
font-family: Arial, Helvetica, sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 20px;
text-align: center;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: var(--Color-Primitive-Neutral-neutral-500, #737373);
`;

export const ContentContainer = styled.div`
height: Hug (40px)px;
gap: 8px;
opacity: 0px;
display: flex;
justify-content: space-between;
align-items: center;
`;


export const TitleContent = styled.div`
width: 100%;
height: 40px;
gap: 0px;
opacity: 0px;
//styleName: Heading/text-h-lg;
font-family: Arial, Helvetica, sans-serif;
font-size: 32px;
font-weight: 700;
line-height: 40px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: var(--Color-Primitive-Neutral-neutral-900, #171717);
`;

export const SelectYear = styled.select`
width: Fill (120px)px;
height: Hug (40px)px;
padding: 10px 12px 10px 12px;
gap: 8px;
border-radius: 8px;
border: 1px ;
opacity: 0px;
background: var(--Color-Primitive-Base-white, #FFFFFF);
border: 1px solid var(--Color-Primitive-Neutral-neutral-300, #D4D4D4);
box-shadow: 0px 1px 2px 0px #00000014;
`;