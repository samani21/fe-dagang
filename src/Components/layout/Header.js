import styled from "styled-components";

export const HeaderContentContainer = styled.div`
  width: Fixed (1,440px)px;
  height: 40px;
  padding: 10px 156px 10px 156px;
  border: 0px 0px 1px 0px;
  opacity: 0px;
  background: var(--Color-Primitive-Base-white, #FFFFFF);
  border-bottom: 1px solid var(--Color-Primitive-Neutral-neutral-200, #E5E5E5);
  @media (max-width: 900px) {
    padding: 10px
  }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  height: Hug (40px)px;
  gap: 0px;
  display: flex;
  justify-content: space-between;
  opacity: 0px;
`;

export const NavbarLeft = styled.div`
  width: 70%;
  height: Hug (40px)px;
  gap: 50px;
  opacity: 0px;
  margin-top: -35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: Hug (169px)px;
  height: Fixed (40px)px;
  padding: 8px 0px 8px 0px;
  gap: 8px;
  opacity: 0px;
`;

export const Logo = styled.p`
  width: 100%;
  height: 0px;
  gap: 0px;
  opacity: 0px;
  font-family: Source Serif Pro;
  font-size: 24px;
  font-style: italic;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: var(--Color-Primitive-Neutral-neutral-900, #171717);
`;

export const Menu = styled.div`
  width: Hug (261px)px;
  height: Hug (40px)px;
  gap: 24px;
  opacity: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const TitleMenu = styled.p`
  width: auto;
  height: 20px;
  gap: 0px;
  opacity: 0px;
  //styleName: Label/text-l-md;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 25px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: var(--Color-Primitive-Neutral-neutral-900, #171717);
`;

export const Arrow = styled.div`
  display: flex;
`;

export const ImageArrow = styled.img`
  height: 30px;
  margin-top: 10px;
`;

export const KebabMenu = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  top: 40px;
  right: 0;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  list-style: none;
  z-index: 1000;
`;

export const KebabMenuItem = styled.li`
  width: Fill (153px)px;
  height: Hug (40px)px;
  padding: 10px 12px 10px 12px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TextKebabMenu = styled.p`
  width: 200px;
  height: 20px;
  font-family: var(--TypographyFontFamilyfont-family-1);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: var(--Color-Primitive-Neutral-neutral-900, #171717);
`;

export const LineKebab = styled.hr`
  width: 100%;
  height: 0px;
  border: 1px ;
  border: 1px solid var(--Color-Primitive-Neutral-neutral-200, #E5E5E5);
`

export const NavbarRight = styled.div`
  width: 100%;
  opacity: 0px;
  margin-top: 5px;
  display: flex;
  justify-content: right;
  @media (max-width: 600px) {
    padding-right: 20px;
  }
`;

export const SearchContainer = styled.div`
  flex: 6;
  width: 100%;
  display: flex;
  justify-content: end;
  @media (max-width: 900px) {
    margin-top: 0px;
    padding-right: 0px;
  }
`;

export const InputSearchContainer = styled.div`
  position: relative;
  height: 30px;
  animation: 0.3s ease-in-out;
  overflow: hidden;
  display: flex;
  margin-right: -30px;
  @media (max-width: 500px) {
    padding-left: 100px;
  }
  @media (max-width: 360px) {
    position: absolute;
    margin-right: -0px;
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 8px;
  background: var(--Color-Primitive-Neutral-neutral-100, #F5F5F5);
  border: 1px solid #ccc;
  outline: none;
  white-space: nowrap; /* Prevent text wrapping */
  overflow: hidden; /* Hide overflowing text */
  text-overflow: ellipsis; /* Display ellipsis for overflowed text */
  box-sizing: border-box;  
`;

export const IconSearch = styled.img`
  position: relative;
  left: ${(props) => (props.isOpen ? '0' : '0')};
  transform: translateY(-50%);
  cursor: pointer;
  transition: left 0.3s ease -in -out;
  width: 28px;
  height: 28px;
  margin-top: 15px;
  margin-left: ${(props) => (props.isOpen ? '15px' : '0')}; 
  background-color: ${(props) => (props.isHovered ? "#F5F5F5" : "#ffffff")};
`;

export const IconCartContainer = styled.div`
  margin-top: 4px;
  margin-right: 10px;
  cursor: pointer;
`;

export const IconCart = styled.img`

`;

export const UserContainer = styled.div`
  margin-top: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const ImageUser = styled.img`

`;

export const KebabMenuUser = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  top: 40px;
  right: 100px;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  list-style: none;
  z-index: 1000;
  @media (max-width: 900px) {
    right: 20px;
  }
`;

export const SidebarCart = styled.div`
  position: fixed;
  top: 0;
  right:0;
  width: 400px;
  height: 100%;
  background-color: #fff;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 100000;
  box-shadow: 3px 3px 10px 3px #dddddd;
  
  @media (max-width: 600px) {
    width: 400px;
  }
  @media (max-width: 420px) {
    width: 300px;
  }
  @media (max-width: 350px) {
    width: 100%;
    height: 100%;
  }
`;

export const MenuList = styled.div`
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
`;