import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.div`
    width: 200px;
    background: var(--Color-Primitive-Brand-brand-900, #ffffff);
    color: white;
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--Color-Primitive-Neutral-neutral-200, #E5E5E5);
    transition: width 0.3s;
    border-radius: 0px 20px 20px 0px;
    @media (max-width: 900px) and (min-width: 501px) {
        position: absolute;
        z-index: 3;
        width: 200px; /* Lebar disesuaikan */
    }

    @media (max-width: 500px) {
        display: none; /* Sidebar tersembunyi di layar kecil */
    }
`;
export const SidebarHeader = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #25476A;
    margin-top: 0px;
    padding-left: 20px;
    padding-top: 10px;
    border-radius: 0px 0px 10px 0px;
`;

export const Image = styled.img`
    width: 1.7em;
    height: 1.7em;
    margin-right: .2em;
    -webkit-mask: url(${props => props.icon}) no-repeat center;
    mask: url(${props => props.icon}) no-repeat center;
    background-color: ${props => props.color ? props.color : "#25476A"};
    @media (max-width: 500px) {
        background-color: white;
    }
`;


export const TitleHeader = styled.p`
    opacity: 1; /* Pastikan terlihat pada layar tertentu */
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px; /* Ukuran font lebih kecil */
    font-weight: 600;
    color: var(--Color-Primitive-Base-white, #ffffff);

    @media (max-width: 900px) and (min-width: 501px) {
        font-size: 14px; /* Ukuran font lebih kecil untuk layar sedang */
    }
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 65%;
    padding: 20px;
    overflow: auto;

    /* Hilangkan scrollbar */
    scrollbar-width: none; /* Untuk Firefox */
    -ms-overflow-style: none; /* Untuk Internet Explorer dan Edge */
    
    &::-webkit-scrollbar {
        display: none; /* Untuk Webkit-based browsers (Chrome, Safari) */
    }
`;

export const MenuItem = styled.div`
    cursor: pointer;
    padding: 8px 10px; /* Disesuaikan untuk layar lebih kecil */
    border-radius: 5px;

    &:hover {
        background-color: #25476A;
    }
    &.active {
        background-color: #25476A;
    }

    @media (max-width: 900px) and (min-width: 501px) {
        padding: 5px 8px; /* Padding lebih kecil untuk layar sedang */
    }
`;

export const NavLinks = styled(Link)`
    display: flex;
    align-items: center;
    color: #4d5e6e;
    text-decoration: none;
    font-size: 0.82em;
    font-family: Arial, Helvetica, sans-serif;
    position: relative;

    span {
        display: inline-block;
        margin-left: 10px;
        white-space: nowrap;
        opacity: 1;
        transition: opacity 0.3s, visibility 0.3s;

        @media (max-width: 900px) and (min-width: 501px) {
            font-size: 0.75em; /* Ukuran font teks lebih kecil */
        }
    }

    &:hover span {
        opacity: 1;
        visibility: visible;
        color: white;
    }

    &.active {
        color: white;

        span {
            color: white;
        }
    }
`;
export const MenuItemSubMenu = styled.div`
    cursor: pointer;
    padding: 8px 25px; /* Disesuaikan untuk layar lebih kecil */
    border-radius: 5px;
    
  

    @media (max-width: 900px) and (min-width: 501px) {
        padding: 5px 15px; /* Padding lebih kecil untuk layar sedang */
    }
`;
export const NavLinksSubMenu = styled(Link)`
     display: flex;
    align-items: center;
    color: #4d5e6e;
    text-decoration: none;
    font-size: 0.82em;
    font-family: Arial, Helvetica, sans-serif;
    position: relative;

    span {
        display: inline-block;
        margin-left: 10px;
        white-space: nowrap;
        opacity: 1;
        transition: opacity 0.3s, visibility 0.3s;

        @media (max-width: 900px) and (min-width: 501px) {
            font-size: 0.75em; /* Ukuran font teks lebih kecil */
        }
    }

    &:hover span {
        opacity: 1;
        visibility: visible;
        color: white;
        color: #10c6e6;
    }

    &.active {
       color: #10c6e6;
    }
`;

export const FooterSidebarDesktop = styled.div`
   
`;
export const FooterSidebarMobile = styled.div`
    display: none;
    @media (max-width: 900px) {
        display: block;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .burgerProfil{
        @media (max-width: 900px) {
           display: none;
        }
    }
     .burgerProfil{
        opacity: 1;
        visibility: none;
        @media (max-width: 900px) {
            display: block;
            position: absolute;
            left: 120px; /* Posisi teks muncul di sebelah kanan ikon */
            background: linear-gradient(267.17deg, #0D9488 0%, #115E59 100%);
            padding: 5px 10px;
            color: white;
            height: auto;
            width: 120px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            /* Membuat sisi kiri bawah lancip */
            /* clip-path: polygon(100% 0%, 100% 46%, 100% 100%, 25% 100%, 0% 50%, 25% 0%); */
        }

    }
`;

export const NavIcon = styled.img`
    width: 1.7em;
    height: 1.7em;
    margin-right: .5em;
    -webkit-mask: url(${props => props.icon}) no-repeat center;
    mask: url(${props => props.icon}) no-repeat center;
    background-color: ${props => props.color ? props.color : "#4d5e6e"};

    &.active {
        color: white;
        background-color: white;
    }

`;

export const IconDropDown = styled.img`
     width: 1.7em;
    height: 1.7em;
    margin-right: .2em;
    margin-left: 20px;
    -webkit-mask: url(${props => props.icon}) no-repeat center;
    mask: url(${props => props.icon}) no-repeat center;
    background-color: ${props => props.color ? props.color : "#15397a"};
   
`;
export const NavIconSubMenu = styled.img`
    width: 1.7em;
    height: 1.7em;
    margin-right: .5em;
    -webkit-mask: url(${props => props.icon}) no-repeat center;
    mask: url(${props => props.icon}) no-repeat center;
    background-color: ${props => props.color ? props.color : "#4d5e6e"};

    &.active {
        color: #10c6e6;
        background-color: #10c6e6;
    }

`;

export const TopBarContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    border-bottom: 1px solid var(--Color-Primitive-Neutral-neutral-200, #E5E5E5);
`
export const TopBarContainerRight = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    color: white;
    background: white;
    width: 100%;
    @media (max-width: 500px) {
        background: #13364e;
    }
`;

export const TextTopbar = styled.p`
    width: 62px;
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
    color: var(--Color-Primitive-Neutral-neutral-900, #171717);
    @media (max-width: 500px) {
        display: none;
    }
`;

export const ShortcutButtons = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    height: 30px;
    width:auto;
    padding: 6px 12px 6px 12px;
    gap: 8px;
    border-radius: 8px;
    border: 1px 0px 0px 0px;
    opacity: 0px;
    background: var(--Color-Primitive-Base-white, #FFFFFF);
    border: 1px solid var(--Color-Primitive-Neutral-neutral-300, #D4D4D4);
    box-shadow: 0px 1px 2px 0px #13364e1A;
    //styleName: Label/text-l-md;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

`;

export const AppContainer = styled.div`
    display: flex;
    height: 100vh;
    @media (max-width: 500px) {
        display: grid;
        justify-content:normal;
    }
`;

export const MainContent = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative; /* Dibutuhkan untuk pseudo-element */
    overflow: hidden; /* Agar pseudo-element tidak keluar dari batas */
`;

export const ContentArea = styled.div`
    flex-grow: 1;
    padding: 20px;
    height: 100vh;
    overflow: auto;
`;

export const BackgroundContent = styled.div`
clip-path: ellipse(70% 33% at 47% 13%);
background: red;
height: 100%;
`;

export const FooterSidebar = styled.div`
    height: 20%;
    padding: 20px;
    margin-bottom: 40px;
    @media (max-width: 900px) {
        margin-bottom: 0px;
    }
`;

export const CardProfil = styled.div`
    margin-top: 20px;
    width: Fill (208px)px;
    height: 40px;
    padding: 12px;
    gap: 8px;
    border-radius: 8px;
    opacity: 0px;
    background: var(--Color-Primitive-Brand-brand-800, #25476A);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BingkatFoto = styled.div`
    width: 40px;
    height: 40px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    background: var(--Color-Primitive-Neutral-neutral-200, #E5E5E5);
`;

export const Profil = styled.div`
    width: Fill (128px)px;
    height: 70px;
`;

export const NameProfil = styled.p`
    width: 128px;
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

export const EmailProfil = styled.p`
    width: 128px;
    gap: 0px;
    opacity: 0px;
    //styleName: Paragraph/text-p-sm;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 0px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: var(--Color-Primitive-Brand-brand-500, #b5dfec);
`;

export const NavbarMobile = styled.div`
    display: none;
    @media (max-width: 500px) {
    width: 100%;
    height: 60px;
    position: relative;
    display: flex;
    overflow-x: auto; /* Aktifkan pengguliran horizontal */
    overflow-y: hidden; /* Sembunyikan pengguliran vertikal */
    -ms-overflow-style: none; /* Untuk Internet Explorer dan Edge */
    scrollbar-width: none;
    border-top: 1px solid var(--Color-Primitive-Neutral-neutral-200, #E5E5E5)
}

`;

export const MenuMobile = styled.div`
width: auto;
height: Hug (40px)px;
padding: 10px 0px 0px 0px;
gap: 8px;
border-radius: var(--Radiusradius-1);
opacity: 0px;
margin-left: 10px;
`;

export const SubMenuMobile = styled.div`
display: none;
@media (max-width: 500px) {
    display: block;
}
`;

export const NavLinksMobile = styled(Link)`
    display: flex;
    width: Fill (112px)px;
    height: 40px;
    padding: 0px 10px 0px 10px;
    gap: 8px;
    border-radius: var(--Radiusradius-1);
    opacity: 0px;
    color: #A3A3A3;
    text-decoration: none;
    align-items: center;
    cursor: pointer;
    font-size: .82em;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 8px;
    &.active {
        background: #c4d8ff;
        color: #0d4e94;
    }


`;

export const NavIconMobile = styled.img`
    width: 1.7em;
    height: 1.7em;
    margin-right: .2em;
    -webkit-mask: url(${props => props.icon}) no-repeat center;
    mask: url(${props => props.icon}) no-repeat center;
    background-color: ${props => props.color ? props.color : "#A3A3A3"};

    
    &.active {
        color: #0d4e94;
        background: #0d4e94;
    }

`;