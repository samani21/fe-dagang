import React from 'react';
import { AddPayementLeft, AddPaymentContainer, AddRemoveContainer, Address, AddressContainer, ButtonAddPayment, ButtonCheckout, ButtonEdit, ContentCart, DeliveryContainer, DetailContainer, DetailItemComponent, Fee, FeeContainer, FeeCut, HeaderCart, IconAddPayment, IconAddress, IconBack, IconDetail, IconMinus, IconPlus, ImageItem, ImageItemContainer, Item, ItemContainer, Name, NameItem, OrderContainer, OrderSummary, Payment, PaymentContainer, PlusContainer, RemoveButton, SidebarContentCart, StockContainer, Summary, TextDark, TextDetail, TextGray, TextStock, TitleAddress, TitleCart, TitleOrder, Type } from '../../../Components/layout/ModalCart';
import { iconArrowRIght, iconBack, iconCoordinat, iconMinus, iconPlus, ImageHp, ImageSepatu } from '../../../Assets';

const CartPelanggan = (props) => {
    const { toggleSidebar } = props;

    return (
        <SidebarContentCart>
            <HeaderCart>
                <IconBack src={iconBack} onClick={toggleSidebar} />
                <TitleCart>Checkout</TitleCart>
            </HeaderCart>
            <ContentCart>
                <TitleAddress>
                    Alamat
                </TitleAddress>
                <AddressContainer>
                    <IconAddress src={iconCoordinat} />
                    <DeliveryContainer>
                        <div>
                            <Name>
                                Sam'ani
                            </Name>
                            <Address>
                                Jl.Gerilya Peradapan Rt.99 Rw.99, Kelayan Timur, Banjarmasin Selatan, Banjarmasin
                            </Address>
                        </div>
                        <ButtonEdit>
                            Edit
                        </ButtonEdit>
                    </DeliveryContainer>
                </AddressContainer>
                <TitleOrder>
                    Pesanan Anda
                </TitleOrder>
                <div>
                    <OrderContainer>
                        <DetailContainer>
                            <TextDetail>Detail Produk</TextDetail>
                            <IconDetail src={iconArrowRIght} />
                        </DetailContainer>
                        <ItemContainer>
                            <Item>
                                <ImageItemContainer>
                                    <ImageItem src={ImageSepatu} />
                                </ImageItemContainer>
                                <DetailItemComponent>
                                    <NameItem>Sepatu Sport</NameItem>
                                    <Type>Type 01</Type>
                                    <FeeContainer>
                                        <FeeCut>
                                            IDR 150.000
                                        </FeeCut>
                                        <Fee> IDR 120.000</Fee>
                                    </FeeContainer>
                                </DetailItemComponent>
                            </Item>
                            <StockContainer>
                                <TextStock>Total Stock</TextStock>
                                <AddRemoveContainer>
                                    <RemoveButton>
                                        <IconMinus src={iconMinus} />
                                    </RemoveButton>
                                    1
                                    <RemoveButton>
                                        <PlusContainer>
                                            <IconPlus src={iconPlus} />
                                        </PlusContainer>
                                    </RemoveButton>
                                </AddRemoveContainer>
                            </StockContainer>
                        </ItemContainer>
                    </OrderContainer>
                    <OrderContainer>
                        <DetailContainer>
                            <TextDetail>Detail Produk</TextDetail>
                            <IconDetail src={iconArrowRIght} />
                        </DetailContainer>
                        <ItemContainer>
                            <Item>
                                <ImageItemContainer>
                                    <ImageItem src={ImageHp} />
                                </ImageItemContainer>
                                <DetailItemComponent>
                                    <NameItem>SmartPhone</NameItem>
                                    <Type>Type 01</Type>
                                    <FeeContainer>
                                        <FeeCut>
                                            IDR 10.000.000
                                        </FeeCut>
                                        <Fee> IDR 5.000.000</Fee>
                                    </FeeContainer>
                                </DetailItemComponent>
                            </Item>
                            <StockContainer>
                                <TextStock>Total Stock</TextStock>
                                <AddRemoveContainer>
                                    <RemoveButton>
                                        <IconMinus src={iconMinus} />
                                    </RemoveButton>
                                    1
                                    <RemoveButton>
                                        <PlusContainer>
                                            <IconPlus src={iconPlus} />
                                        </PlusContainer>
                                    </RemoveButton>
                                </AddRemoveContainer>
                            </StockContainer>
                        </ItemContainer>
                    </OrderContainer>
                </div>
                <PaymentContainer>
                    <TitleOrder>
                        Opsi Pembayaran
                    </TitleOrder>
                    <AddPaymentContainer>
                        <AddPayementLeft>
                            <ButtonAddPayment>
                                <IconPlus src={iconPlus} />
                            </ButtonAddPayment>
                            <Payment>
                                Add Payment
                            </Payment>
                        </AddPayementLeft>
                        <IconAddPayment src={iconArrowRIght} />
                    </AddPaymentContainer>
                </PaymentContainer>
                <OrderSummary>
                    <TitleOrder>
                        Ringkasan Pembayaran
                    </TitleOrder>
                    <Summary>
                        <TextGray>Subtotal</TextGray>
                        <TextDark>IDR 200.000</TextDark>
                    </Summary>
                    <Summary>
                        <TextGray>Subtotal</TextGray>
                        <TextDark>-IDR 50.000</TextDark>
                    </Summary>
                    <Summary>
                        <TextGray>Biaya Pengiriman</TextGray>
                        <TextDark>0</TextDark>
                    </Summary>
                    <Summary>
                        <TextDark>Total</TextDark>
                        <TextDark>IDR 5.120.000</TextDark>
                    </Summary>
                </OrderSummary>
                <ButtonCheckout>
                    Bayar
                </ButtonCheckout>
            </ContentCart>
        </SidebarContentCart>
    );
};

export default CartPelanggan;
