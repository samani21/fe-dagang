import styled from 'styled-components';

export const HeaderContentContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 72px;
  padding: 0px 0px;
  padding-left: 0px;
  @media (max-width: 900px) {
    height: 52px;
    padding: 0px;
    border-bottom: none;
    position: relative;
  }
`;

export const Navbar = styled.div`
  width: 100%;
  height: 25px;
  padding: 15px 10px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
position: fixed;
background-color: #ffffff;
z-index: 9999;
border-bottom: 1px solid var(--Color-Primitive-Neutral-neutral-200, #E5E5E5);
  @media (max-width: 1024px) {
  }

  @media (max-width: 900px) {
    height: 0px;
    padding: 0 16px;
    grid-template-columns: 1fr; 
    border-bottom: 0px solid var(--Color-Primitive-Neutral-neutral-200, #E5E5E5);
  }
`;

export const NavbarResponsive = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: inline;
    position: fixed;
    width: 100%;
    z-index: 9999;
    background-color: #fff; /* Menambahkan latar belakang putih untuk tampilan yang lebih jelas */
    padding: 0 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Menambahkan bayangan untuk depth */
    display: flex;
  }
`;

export const NavbarResponsiveHeader = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr; /* Corrected syntax for grid columns */
  }
`;

export const MenuLeft = styled.div`
  display: grid;
  grid-template-columns: 3fr 10fr;
  padding-left: 20px;
  @media (max-width: 1290px) {
    grid-template-columns: 5fr 10fr;
  }

  @media (max-width: 1140px) {
    grid-template-columns: 8fr 10fr;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Logo = styled.p`
  font-family: Source Serif Pro;
  font-size: 24px;
  font-style: italic;
  font-weight: 600;
  color: var(--Color-Primitive-Neutral-neutral-900, #171717);
  cursor: pointer;
  margin-top: 0px;
  width: 100%;
  text-align: center;
  @media (max-width: 900px) {
    text-align: left;
    margin-top: 10px;
    margin-left: 0px;
    white-space: nowrap;
    font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;

  }
`;

export const MenuToggle = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    cursor: pointer;
    width: 100%;
    justify-content:right;
    padding-right: 16px;
  }
`;

export const ImageToggle = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const CloseIcon = styled.img`
  display: none;

  @media (max-width: 900px) {
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: absolute;
    top: 10px;
    right: 20px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  margin-top: -10px;
  @media (max-width: 900px) {
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? '0' : '-100%')};
    width: 96%;
    height: 100%;
    background-color: #ffffff;
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 20px;
    flex-direction: column;
    transition: right 0.3s ease;
  }
`;

export const MenuContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid var(--Color-Primitive-Neutral-neutral-200, #E5E5E5);
padding-left: 1px;
padding-right: 6px;
`;

export const MenuList = styled.li`
  cursor: pointer;

  @media (max-width: 900px) {
    margin-bottom: 10px;
  }
`;

export const TextList = styled.p`
  font-family: var(--TypographyFontFamilyfont-family-1);
  font-size: 14px;
  line-height: 20px;
  color: var(--Color-Primitive-Neutral-neutral-900, #171717);
`;

export const Arrow = styled.div`
  display: flex;
`;

export const ImageArrow = styled.img`
`;

export const MenuRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 50px;
  gap: 10px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); 
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const RegisterLogin = styled.div`
  display: none;

  @media(max-width: 900px){
    display: grid;
    margin-left: -10px;
  }
`;

export const IconHeader = styled.img`
  width: 28px;
  height: 28px;
cursor: pointer;
  @media (max-width: 900px) {
    width: 30px;
    height: 30px;
    margin-right: -12px;
    margin-top: 0px;
  }
`;

export const IconHeaderResponsive = styled.img`
  display: none;

  @media (max-width: 500px) {
    display: inline;
    width: 20px;
    height: 15px;
    margin-right: 30px;
  }
`;

export const Register = styled.p`
  color: black;
  padding: 0 10px;
`;

export const Login = styled.button`
  width: 70px;
  height: 34px;
  border-radius: 35px;
  background: black;

  @media(max-width: 900px){
    width: 100%;
  }
`;

export const TextLight = styled.p`
  color: white;
  font-size: 14px;
`;

export const TextDark = styled.p`
  color: #171717;
  font-size: 14px;
`;

export const ContainerContent = styled.div`
  width: 100%;
  height: auto;
  padding: 15px;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 250px;
  gap: 40px;

  @media (max-width: 900px) {
    margin-top: ${({ open }) => (open ? '80px' : '250px')};
    width: 328px;
    height: auto;
  }
`;

export const TextContent = styled.div`
  font-family: Playfair Display;
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  text-align: center;
  color: #ffffff;

  @media (max-width: 900px) {
    height: 156px;
    font-size: 40px;
    line-height: 52px;
  }
`;

export const Container = styled.div`
  text-align: center;
  margin-top: 40px;
`;

export const CreateInvitation = styled.button`
  width: 166px;
  height: 48px;
  padding: 12px 24px;
  border-radius: 50px;
  text-align: center;
  background: #ffffff;
`;

export const UserContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
  @media (max-width: 900px) {
    width: 50px;
    height: 50px;
    margin-top: 6px;
    margin-right: 0px;
  }
`;


// Dropdown menu yang muncul saat kebab diklik
export const KebabMenu = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  list-style: none;
  z-index: 1000;
  width: 150px;
`;

export const KebabMenuItem = styled.div`
  width: Fill (153px)px;
height: Hug (40px)px;
padding: 10px 12px 10px 12px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TextKebabMenu = styled.p`
width: auto;
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

export const ImageUser = styled.img`
border-radius: 50px;
width: 28px;
  height: 28px;
cursor: pointer;
`;
export const TextGrey = styled.p`
width: 100%;
height: 20px;
font-family: var(--TypographyFontFamilyfont-family-1);
font-size: 14px;
font-weight: 400;
line-height: 20px;
color: var(--Color-Primitive-Neutral-neutral-500, #737373);
margin-right: 10px;
`;

export const SidebarCart = styled.div`
  position: fixed;
  top: 0;
  right:0;
  width: 300px;
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
`;

export const SidebarContentCart = styled.div`
  padding: 20px;
  @media (max-width: 420px) {
    padding: 0px;
  }
  // Style untuk konten sidebar
`;

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


export const CartContainer = styled.div`
width: 100%;
padding: 1px;
`;

export const TitleCart = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const TextTitle = styled.p`
width: auto;
height:40px;
font-family: Playfair Display;
font-size: 32px;
font-weight: 600;
line-height:40px;
text-align: left;
color: var(--Color-Primitive-Neutral-neutral-900, #171717);
`;


export const ListItem = styled.div`
  width: 100%;
  height: 550px;
  padding-top: 30px;
  overflow-y: auto;

  /* Untuk browser berbasis WebKit seperti Chrome dan Safari */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Untuk Firefox */
  scrollbar-width: none;
`;

export const Item = styled.div`
width: 90%;
height: Hug (80px)px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid var(--Color-Primitive-Neutral-neutral-200, #E5E5E5);
margin-bottom: 20px;
`;

export const ItemContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const InputCeklist = styled.input`
margin-right: 20px;
@media (max-width: 600px) {
  margin-right: 10px;
}
`;

export const ImageContainer = styled.div`
width: 300px;
padding-right: 10px;
`

export const ImageItem = styled.img`
height: 100px;
width: 400px;
@media (max-width: 600px) {
  padding-left: 10px;
  width: 100px;
}
`;

export const TypeItem = styled.div`
width: 50%;
height: Hug (76px)px;
gap: 8px;
opacity: 0px;
`;

export const CountItem = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 600px) {
  display: none;
}
`;

export const CountItemResponsive = styled.div`
display: none;
@media (max-width: 600px) {
  display: inline;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export const ImageMin = styled.img`
width: 24px;
height: 24px;
padding: 0px 5px 0px 5px;
cursor: pointer;
`;

export const TotalCount = styled.div`
width: 40px;
height: Hug (40px)px;
padding: 8px 0px 8px 0px;
gap: 8px;
border-radius: 8px;
background: var(--Color-Primitive-Neutral-neutral-100, #F5F5F5);
display: flex;
justify-content: center;
`;

export const FeeContainer = styled.div`
width: 100%;
height: 100px;
gap: 0px;
border: 1px;
border-top: 1px solid var(--Color-Primitive-Neutral-neutral-200, #E5E5E5);
display: flex;
justify-content: space-around;
align-items: center;
position: absolute;
bottom: 0px;
background-color: #ffffff;
`;

export const TotalContainer = styled.div`
width: Hug (97px)px;
height: Hug (48px)px;
`;

export const PayContainer = styled.div`
width: 25%;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  min-width: 160px;
  border-radius: 4px;
  overflow: hidden;

  ${MenuList}:hover & {
    display: block;
  }
`;

export const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
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

export const SearchContainer = styled.div`
width: 100%;
height: 60px;
display: flex;
justify-content: end;
@media (max-width: 900px) {
  margin-top: 0px;
  padding-right: 0px;
}
`;

export const IconCartContainer = styled.div`
width: 20%;
height: 60px;
display: flex;
justify-content: start;
@media (max-width: 900px) {
  margin-top: 0px;
  padding-right: 0px;
}
`;

export const AuthContainer = styled.div`
display: flex;
justify-content: center;
align-items: start;
width: 20%;
height: 60px;
`;

export const Cart = styled.div`
display: flex;
justify-content:center;
align-items: start;
width: 20%;
background: red;
@media (max-width: 360px) {
  width: 30%;
}
`;