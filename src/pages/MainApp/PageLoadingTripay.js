import React from 'react'
import animasiLoading from '../../Assets/animation/loading-pay.gif'
import { AnimiasLoading, LoadingContainer, PayLoadingContainer, TextLoadingPay } from '../../Components/layout/PageLoadingTripay';


const PageLoadingTripay = () => {

    return (
        <PayLoadingContainer>
            <LoadingContainer>
                <TextLoadingPay>Anda sedang diarahkan ke halaman pembayaran TriPay</TextLoadingPay>
                <AnimiasLoading src={animasiLoading} />
            </LoadingContainer>
        </PayLoadingContainer>
    );
};

export default PageLoadingTripay;
