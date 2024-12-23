import React, { useState } from 'react'
import { Arrow, AuthContainer, HeaderContentContainer, IconCartContainer, IconHeader, IconSearch, ImageArrow, ImageUser, InputSearch, InputSearchContainer, KebabMenu, KebabMenuItem, LineKebab, Logo, Menu, MenuLeft, MenuList, MenuRight, Navbar, SearchContainer, SidebarCart, TextKebabMenu, TextList } from '../../Components/layout/Header';
import { useNavigate } from 'react-router-dom';
import { iconCart, iconDropDown, iconDropUp, iconSearch, iconUserLogin } from '../../Assets';
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
]

const Pelanggan = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const [menuOpenOther, setMenuOpenOther] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const filteredMenuItemsChild = menuPelanggan?.filter(item => item?.child);
    const filteredMenuItems = menuPelanggan?.filter(item => !item?.child);
    const [pay, setPay] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleMenuOther = () => setMenuOpenOther(!menuOpenOther);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    return (
        <HeaderContentContainer open={menuOpen}>
            <Navbar>
                <MenuLeft>
                    <Logo onClick={() => navigate('/')}>Logo.</Logo>
                    <Menu open={menuOpen}>
                        {filteredMenuItems.map((item, index) => (
                            <MenuList style={{ cursor: "pointer" }} onClick={() => navigate(item?.url)} key={index}>
                                <TextList>{item?.parent_name}</TextList>
                            </MenuList>
                        ))}
                        {filteredMenuItemsChild.length > 0 &&
                            filteredMenuItemsChild?.map((child, index) => (
                                <MenuList style={{ cursor: "pointer" }}
                                    onMouseLeave={() => setMenuOpenOther(false)}
                                    onMouseEnter={() => setMenuOpenOther(true)}
                                >
                                    <Arrow onClick={toggleMenuOther}>
                                        <TextList>{child?.parent_name}</TextList>
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
                            ))}
                    </Menu>
                </MenuLeft>
                <MenuRight>
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
                        <IconHeader src={iconCart} alt="Cart" onClick={toggleSidebar} />
                    </IconCartContainer>
                    <AuthContainer onClick={toggleMenu}>
                        <ImageUser src={iconUserLogin} />
                        <ImageArrow src={menuOpen ? iconDropDown : iconDropUp} style={{ width: "28px", height: "28px" }} />
                        <KebabMenu open={menuOpen} style={{ top: "40px", right: "100px" }}>
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
                        </KebabMenu>
                    </AuthContainer>
                </MenuRight>
            </Navbar>
            <SidebarCart open={sidebarOpen}>
                <CartPelanggan toggleSidebar={toggleSidebar} />
            </SidebarCart>
        </HeaderContentContainer >
    )
}

export default Pelanggan
