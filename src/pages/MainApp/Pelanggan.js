import React, { useState } from 'react';
import {
    HeaderContentContainer,
    IconCart,
    IconCartContainer,
    IconSearch,
    ImageArrow,
    ImageUser,
    InputSearch,
    InputSearchContainer,
    KebabMenuItem,
    KebabMenuUser,
    LineKebab,
    Logo,
    LogoContainer,
    Menu,
    MenuList,
    NavbarContainer,
    NavbarLeft,
    NavbarRight,
    SearchContainer,
    SidebarCart,
    TextKebabMenu,
    TitleMenu,
    UserContainer
} from '../../Components/layout/Header';
import { useNavigate } from 'react-router-dom';
import { iconCart, iconDropDown, iconDropUp, iconSearch, iconUserLogin } from '../../Assets';
import { OverlayCart } from '../../Components/layout/ModalCart';
import CartPelanggan from './cart/CartPelanggan';

const menuPelanggan = [
    {
        id: 1,
        parent_name: 'Desain',
        url: "/desain"
    },
    {
        id: 2,
        parent_name: 'Portofolio',
        url: "/portofolio"
    },
    {
        id: 3,
        parent_name: 'Lainnya',
        child: [
            {
                idChild: 1,
                nameChild: "Menu 1",
                url: "/menu-1"
            },
            {
                idChild: 2,
                nameChild: "Menu 2",
                url: "/menu-2"
            },
            {
                idChild: 3,
                nameChild: "Menu 3",
                url: "/menu-3"
            },
        ]
    },
];

const Pelanggan = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    // const [menuOpenOther, setMenuOpenOther] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    // const filteredMenuItemsChild = menuPelanggan?.filter(item => item?.child);
    const filteredMenuItems = menuPelanggan?.filter(item => !item?.child);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    // const toggleMenuOther = () => setMenuOpenOther(!menuOpenOther);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <HeaderContentContainer>
            <NavbarContainer>
                <NavbarLeft>
                    <LogoContainer>
                        <Logo>Logo.</Logo>
                    </LogoContainer>
                    <Menu>
                        {filteredMenuItems?.map((menu, index) => (
                            <MenuList key={index}>
                                <TitleMenu>{menu?.parent_name}</TitleMenu>
                            </MenuList>
                        ))}
                        {/* {filteredMenuItemsChild.length > 0 && filteredMenuItemsChild?.map((child, index) => (
                            <MenuList
                                key={index}
                                style={{ cursor: "pointer" }}
                                onMouseLeave={() => setMenuOpenOther(false)}
                                onMouseEnter={() => setMenuOpenOther(true)}
                            >
                                <Arrow onClick={toggleMenuOther}>
                                    <TitleMenu>{child?.parent_name}</TitleMenu>
                                    <ImageArrow src={menuOpenOther ? iconDropDown : iconDropUp} />
                                </Arrow>
                                <KebabMenu open={menuOpenOther}>
                                    {child?.child?.map((item, index) => (
                                        <KebabMenuItem key={index} onClick={() => navigate(item?.url)}>
                                            <TextKebabMenu>{item?.nameChild}</TextKebabMenu>
                                        </KebabMenuItem>
                                    ))}
                                </KebabMenu>
                            </MenuList>
                        ))} */}
                    </Menu>
                </NavbarLeft>
                <NavbarRight>
                    <SearchContainer
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{ marginRight: "10px" }}
                    >
                        <InputSearchContainer>
                            {isHovered && (
                                <InputSearch />
                            )}
                        </InputSearchContainer>
                        <IconSearch
                            src={iconSearch}
                            alt="Search"
                            isHovered={isHovered}
                        />
                    </SearchContainer>
                    <IconCartContainer>
                        <IconCart src={iconCart} onClick={toggleSidebar} />
                    </IconCartContainer>
                    <UserContainer onClick={toggleMenu}>
                        <ImageUser src={iconUserLogin} />
                        <ImageArrow src={menuOpen ? iconDropDown : iconDropUp} style={{ width: "28px", height: "28px", marginTop: "0px" }} />
                        <KebabMenuUser open={menuOpen}>
                            <KebabMenuItem>
                                <TextKebabMenu onClick={() => navigate('/')}>Undanganmu</TextKebabMenu>
                            </KebabMenuItem>
                            <KebabMenuItem onClick={() => navigate('beranda/profile')}>
                                <TextKebabMenu>Informasi Pengguna</TextKebabMenu>
                            </KebabMenuItem>
                            <KebabMenuItem onClick={() => navigate('beranda/history')}>
                                <TextKebabMenu>Riwayat Transaksi</TextKebabMenu>
                            </KebabMenuItem>
                            <LineKebab />
                            <KebabMenuItem onClick={() => navigate('/logout')}>
                                <TextKebabMenu>Keluar</TextKebabMenu>
                            </KebabMenuItem>
                        </KebabMenuUser>
                    </UserContainer>
                </NavbarRight>
            </NavbarContainer>
            <SidebarCart open={sidebarOpen}>
                <CartPelanggan toggleSidebar={toggleSidebar} />
            </SidebarCart>
            <OverlayCart open={sidebarOpen} onClick={toggleSidebar} />
        </HeaderContentContainer>
    );
};

export default Pelanggan;
