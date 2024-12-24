import styled from "styled-components";

export const OverlayCart = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ open }) => (open ? 'block' : 'none')};
  z-index: 99999;
`;

export const SidebarContentCart = styled.div`
  padding: 20px;
  height: 100%;
  @media (max-width: 420px) {
    padding: 00px;
  }
`;

export const TopContentCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  border-bottom:  1px solid var(--Color-Primitive-Neutral-neutral-200, #E5E5E5);
`;

export const TitleContentCart = styled.p`
width: 151px;
height: 0px;
gap: 0px;
opacity: 0px;
font-family: Playfair Display;
font-size: 32px;
font-weight: 600;
line-height: 0px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: var(--Color-Primitive-Neutral-neutral-900, #171717);
`;

export const IconCloseModal = styled.img`
cursor: pointer;
`;

export const ContentCart = styled.div`
height: 75%;
overflow: auto;
&::-webkit-scrollbar {
      display: none;
    }
`;

export const FooterContentCart = styled.div`
height: 12%;
display: flex;
justify-content: space-between;
align-items: center;
border-top:  1px solid var(--Color-Primitive-Neutral-neutral-200, #E5E5E5);
`;