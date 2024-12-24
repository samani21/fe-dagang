import React from 'react';
import { iconCloseModal } from '../../../Assets';
import { ContentCart, FooterContentCart, IconCloseModal, SidebarContentCart, TitleContentCart, TopContentCart } from '../../../Components/layout/ModalCart';
const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
};

const CartPelanggan = (props) => {
    const { toggleSidebar } = props;

    return (
        <SidebarContentCart>
            <TopContentCart>
                <TitleContentCart>
                    Keranjang
                </TitleContentCart>
                <IconCloseModal src={iconCloseModal} onClick={toggleSidebar} />
            </TopContentCart>
            <ContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>
                <TitleContentCart>
                    Item
                </TitleContentCart>

            </ContentCart>
            <FooterContentCart>
                <div>
                    {formatRupiah(1000000)}
                </div>
                <div>
                    Tombol
                </div>
            </FooterContentCart>
        </SidebarContentCart>
    );
};

export default CartPelanggan;
