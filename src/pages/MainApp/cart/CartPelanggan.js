import React from 'react';
import { iconCloseModal} from '../../../Assets';
import { CartContainer, FeeContainer, ImageToggle, ListItem, PayContainer, SidebarContentCart, TextDark, TextGrey, TextLight, TextTitle, TitleCart, TotalContainer } from '../../../Components/layout/Header';
import { ButtonDark } from '../../../Components/auth/ButtonDark';
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
            <CartContainer>
                <TitleCart>
                    <TextTitle>Keranjang</TextTitle>
                    <ImageToggle src={iconCloseModal} onClick={toggleSidebar} alt='Menu Toggle' />
                </TitleCart>
                <ListItem>

                </ListItem>
            </CartContainer>
            <FeeContainer>
                <TotalContainer>
                    <TextGrey>Total</TextGrey>
                    <TextDark>{formatRupiah(10000000)}</TextDark>
                </TotalContainer>
                <PayContainer>
                    <ButtonDark>
                        <TextLight>Bayar</TextLight>
                    </ButtonDark>
                </PayContainer>
            </FeeContainer>
        </SidebarContentCart>
    );
};

export default CartPelanggan;
