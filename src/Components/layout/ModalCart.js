import styled from "styled-components";

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

export const SidebarContentCart = styled.div`
  padding: 20px;
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
      display: none;
    }
  @media (max-width: 420px) {
    padding: 0px;
  }
`;

export const HeaderCart = styled.div`
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 0px;
`;

export const ContentCart = styled.div`
  padding: 20px;
  padding-top: 0px;
  padding-bottom: 40px;
`;

export const IconBack = styled.img`
  cursor: pointer;
`;

export const TitleCart = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: 24px;
  margin-top: 10px;
`;

export const TitleAddress = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 20px;
  margin-top: -10px;
`;

export const AddressContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: start;
`;

export const IconAddress = styled.img`
margin-top: -10px;
margin-right: 10px;
`;

export const DeliveryContainer = styled.div`
display: flex;
justify-content: left;
align-items: center;
`;

export const Name = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 15px;
  margin-top: -10px;
`;

export const Address = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 13px;
  margin-top: -10px;
  color: #949191;
`;

export const ButtonEdit = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: blue;
  margin-top: -10px;
  cursor: pointer;
`;

export const OrderContainer = styled.div`
  margin-bottom: 10px;
`;

export const TitleOrder = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 20px;
  margin-top: 0px;
`;

export const DetailContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: -20px;
`;

export const TextDetail = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 15px;
  margin-right: 5px;
`;

export const IconDetail = styled.img`

`;

export const ItemContainer = styled.div`
padding-bottom: 0px;
border-bottom: 1px solid var(--Color-Primitive-Neutral-neutral-200, #E5E5E5);
`;

export const Item = styled.div`
display: flex;
justify-content: left;
align-items: start;
@media (max-width: 425px) {
  display: grid;
}
`;

export const ImageItemContainer = styled.div`
  border-radius: 10px;
  background: gray;
  width: 100px;
  height: 100px;
`;

export const ImageItem = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

export const DetailItemComponent = styled.div`
padding: 10px;
padding-top: 0px;
width: 100%;
@media (max-width: 425px) {
  padding-left: 0px;
  padding-top: 15px;
}
`;

export const NameItem = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: 15px;
  margin-top: 0px;
`;

export const Type = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 450;
  font-size: 15px;
  margin-top: 0px;
  color: #777778;
  margin-top: -10px;
`;

export const FeeContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 20px;
`;

export const FeeCut = styled.p`
 font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 450;
  font-size: 15px;
  margin-top: 0px;
  color: #777778;
  margin-top: -10px;
  text-decoration: line-through;
`;

export const Fee = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 450;
  font-size: 15px;
  margin-top: 0px;
  color: #f50808;
  margin-top: -10px;
`;

export const StockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TextStock = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 450;
  font-size: 15px;
  margin-top: 0px;
  color: #777778;
  line-height: 20px;
  height: 10px;
`

export const AddRemoveContainer = styled.div`
  border-radius: 30px;
  width: 100px;
  height: 20px;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
`;

export const RemoveButton = styled.p`
  font-size: 25px;
  font-weight: 500;
`;

export const IconMinus = styled.img`
  width: 20px;
  height: 20px;
`;

export const PlusContainer = styled.div`
  border-radius: 100px;
  background: #b4b3b3;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconPlus = styled.img`
  width: 20px;
  height: 20px;
`;

export const PaymentContainer = styled.div`

`;



export const AddPaymentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddPayementLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ButtonAddPayment = styled.div`
  border-radius: 4px;
  border: 1px solid #b4b3b3;
  height: 20px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Payment = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 15px;
`;

export const IconAddPayment = styled.img`
  width: 20px;
`;

export const OrderSummary = styled.div`
  
`;

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextGray = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 450;
  font-size: 15px;
  margin-top: 0px;
  color: #777778;
  margin-top: -10px;
`;

export const TextDark = styled.p`
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: 500;
font-size: 15px;
margin-top: 0px;
color: #000000;
margin-top: -10px;
`;
export const TextBold = styled.p`
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: 450;
font-size: 15px;
margin-top: 0px;
color: #000000;
margin-top: -10px;
`;

export const ButtonCheckout = styled.button`
  width: 100%;
  border-radius: 40px;
  border: 1px;
  height: 40px;
  background-color: #9297d2;
`