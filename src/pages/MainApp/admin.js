import React, { useEffect, useState } from 'react'
import { AppContainer, BingkatFoto, CardProfil, ContentArea, EmailProfil, FooterSidebar, FooterSidebarDesktop, IconDropDown, Image, MainContent, Menu, MenuItem, MenuItemSubMenu, MenuMobile, NameProfil, NavbarMobile, NavIcon, NavIconMobile, NavIconSubMenu, NavLinks, NavLinksMobile, NavLinksSubMenu, Profil, ShortcutButtons, SidebarContainer, SidebarHeader, TitleHeader, TopBarContainer, TopBarContainerRight } from '../../Components/MainComponent'
import { iconBanner, iconCategory, iconCloseSidebar, iconDashboard, iconDropDown, iconDropUp, iconLogout, iconMenu, iconNotif, iconProduct, iconPromo, iconRole, iconSetting, iconUser } from '../../Assets'
import { Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from '../Admin/dashboard'

const menu = [
    {
        id: 1,
        text: 'Dashboard',
        url: '/dashboard',
        icon: iconDashboard
    },
    {
        id: 2,
        text: 'Product',
        icon: iconProduct,
        child: [
            {
                id: 1,
                textChild: 'Categories',
                urlChild: '/categories',
                iconChild: iconCategory,
            },
            {
                id: 2,
                textChild: 'Product',
                urlChild: '/product',
                iconChild: iconProduct,
            }
        ]
    },
    {
        id: 3,
        text: 'Promo',
        url: '/promo',
        icon: iconPromo
    },
    {
        id: 4,
        text: 'Banner',
        url: '/banner',
        icon: iconBanner
    },
    {
        id: 5,
        text: 'User',
        url: '/user',
        icon: iconUser
    },
    {
        id: 6,
        text: 'Roles',
        url: '/role',
        icon: iconRole
    },
    {
        id: 7,
        text: 'Menu',
        url: '/menu',
        icon: iconMenu
    },
    {
        id: 8,
        text: 'Setting',
        url: '/setting',
        icon: iconSetting
    },
    {
        id: 9,
        text: 'Keluar',
        url: '/logout',
        icon: iconLogout
    },
]

const Admin = () => {
    const location = useLocation();
    const [idActive] = useState(menu?.find(item => item?.url === location?.pathname))
    const [activeMenu, setActiveMenu] = useState(idActive?.id);
    const [dropDownMenu, setDropDwonMenu] = useState(false)
    const [activeMenuSubmenu, setActiveMenuSubmenu] = useState();
    const [hiddeSideBar, setHideSideBar] = useState(false);
    const DropDown = () => {
        setDropDwonMenu(!dropDownMenu)
    }
    const handleActiveMenu = (id) => {
        setActiveMenu(activeMenu)
        const menuChild = menu?.find(item => item?.id === id);
        if (menuChild?.child) {
            DropDown()
        } else {
            setActiveMenu(id)
            setDropDwonMenu(false)
        }
    }

    const handleActiveMenuSubmenu = (index, menu) => {
        setActiveMenu(index)
        setActiveMenuSubmenu(menu)
    }

    const handleSidebar = () => {
        setHideSideBar(!hiddeSideBar)
    }
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth > 500 && screenWidth <= 900) {
                setHideSideBar(true);
            } else {
                setHideSideBar(false);
            }
        };

        // Set kondisi awal
        handleResize();

        // Tambahkan event listener untuk resize
        window.addEventListener('resize', handleResize);

        // Bersihkan event listener saat komponen unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <AppContainer>
            {
                !hiddeSideBar && <SidebarContainer>
                    <SidebarHeader>
                        <TitleHeader>
                            DAGANGAN
                        </TitleHeader>
                        {
                            !hiddeSideBar &&
                            <Image icon={iconCloseSidebar} color={'#ffffff'} onClick={handleSidebar} />
                        }

                    </SidebarHeader>
                    <Menu>
                        {
                            menu?.map((item, index) => (
                                item?.text !== 'Setting' && item?.text !== 'Keluar' ?
                                    <>
                                        <MenuItem onClick={() => handleActiveMenu(index + 1)} key={index} className={activeMenu === item?.id ? 'active' : ""}>
                                            <NavLinks to={item?.url} className={activeMenu === item?.id ? 'active' : ""}>
                                                <NavIcon icon={item?.icon} className={activeMenu === item?.id ? 'active' : ""} /><span>{item?.text}</span> {item?.child ?
                                                    <IconDropDown icon={dropDownMenu ? iconDropUp : iconDropDown} /> : ""}
                                            </NavLinks>
                                        </MenuItem>
                                        {item?.child ?
                                            item?.child?.map((sub, indexSub) => (
                                                dropDownMenu &&
                                                <MenuItemSubMenu onClick={() => handleActiveMenuSubmenu(item?.id, indexSub)} key={indexSub} className={activeMenuSubmenu === indexSub ? 'active' : ""}>
                                                    <NavLinksSubMenu to={sub?.urlChild} className={activeMenuSubmenu === indexSub ? 'active' : ""}>
                                                        <NavIconSubMenu icon={sub?.iconChild} className={activeMenuSubmenu === indexSub ? 'active' : ""} /><span>{sub?.textChild}</span>
                                                    </NavLinksSubMenu>
                                                </MenuItemSubMenu>
                                            )) : ""}
                                    </> : ""
                            ))
                        }
                    </Menu>
                    <FooterSidebar>
                        <FooterSidebarDesktop>
                            {
                                menu?.map((item, index) => (
                                    item?.text === 'Setting' || item?.text === 'Keluar' ? <MenuItem onClick={() => handleActiveMenu(index + 1)} key={index} className={activeMenu === item?.id ? 'active' : ""}>
                                        <NavLinks to={item?.url} className={activeMenu === item?.id ? 'active' : ""}>
                                            <NavIcon icon={item?.icon} className={activeMenu === item?.id ? 'active' : ""} /><span>{item?.text}</span>
                                        </NavLinks>
                                    </MenuItem> : ""
                                ))
                            }
                            <CardProfil>
                                <BingkatFoto></BingkatFoto>
                                <Profil>
                                    <NameProfil>James Geidt</NameProfil>
                                    <EmailProfil>james@hrga.com</EmailProfil>
                                </Profil>
                            </CardProfil>
                        </FooterSidebarDesktop>
                    </FooterSidebar>
                </SidebarContainer>
            }
            <MainContent>
                <TopBarContainer>
                    {
                        hiddeSideBar &&
                        <Image icon={iconCloseSidebar} color={'#000000'} onClick={handleSidebar} />
                    }
                    <TopBarContainerRight>
                        <ShortcutButtons>

                        </ShortcutButtons>
                        <Image icon={iconNotif} />
                    </TopBarContainerRight>
                </TopBarContainer>
                <ContentArea>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </ContentArea>
            </MainContent>
            <NavbarMobile>
                {
                    menu?.map((item, index) => (
                        item?.text !== 'Setting' && item?.text !== 'Keluar' ?
                            <MenuMobile onClick={() => handleActiveMenu(index + 1)} key={index}>
                                <NavLinksMobile to={item?.url} className={activeMenu === item?.id ? 'active' : ""}>
                                    <NavIconMobile icon={item?.icon} className={activeMenu === item?.id ? 'active' : ""} /><span>{item?.text}</span>
                                </NavLinksMobile>
                            </MenuMobile> : ""
                    ))
                }
            </NavbarMobile>
        </AppContainer>
    )
}

export default Admin
