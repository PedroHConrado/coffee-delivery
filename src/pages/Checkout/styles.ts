import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ClientInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
`
export const AddressInfo = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  header {
    color: ${(props) => props.theme['yellow-dark']};
    display: flex;
    gap: 8px;
    justify-content: baseline;

    div {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }

    small {
      color: ${(props) => props.theme['base-text']};
    }
  }

  main {
    width: 35rem;
    display: grid;
    grid-template-columns: 12.5rem 17.25rem 3.75rem;
    gap: 1rem;
  }
`
export const Input = styled.input`
  height: 2.625rem;

  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};
  padding: 12px;

  border: none;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
`
export const InputCep = styled(Input)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
`
export const InputStreet = styled(Input)`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
`
export const InputNumber = styled(Input)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
`
export const InputAdjuct = styled(Input)`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
`
export const InputNeighborhood = styled(Input)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
`
export const InputCity = styled(Input)`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 4;
`
export const InputState = styled(Input)`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 4;
`
export const PaymentInfo = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;

  header {
    color: ${(props) => props.theme['purple-medium']};
    display: flex;
    gap: 8px;
    justify-content: baseline;

    div {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }

    small {
      color: ${(props) => props.theme['base-text']};
    }
  }

  main {
    display: flex;
    gap: 1.2rem;
  }
`
export const PaymentCard = styled.div`
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['purple-medium']};
  padding: 16px;
  border-radius: 6px;
  width: 11.17rem;
  margin-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  cursor: pointer;

  span {
    font-size: 12px;
    color: ${(props) => props.theme['base-text']};
    line-height: 19.2px;
  }
`
export const OrderInformation = styled.div`
  width: 28rem;
`
export const OrderSumary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 28rem;
  height: 31.125rem;
  padding: 2.5rem;
  border-radius: 6px 44px;
  margin-top: 1rem;

  background: ${(props) => props.theme['base-card']};

  a {
    text-decoration: none;
    text-align: center;
    padding: 12px;
    border-radius: 6px;

    background: ${(props) => props.theme['yellow-medium']};

    color: ${(props) => props.theme.white};
    font-size: 14px;
    font-weight: 700;
    line-height: 22.4px;
  }
`
export const OrdemItem = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding: 1.5rem 0;

  img {
    width: 4rem;
    height: 4rem;
  }

  main {
    margin-left: 1.25rem;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 20.8px;
    color: ${(props) => props.theme['base-subtitle']};

    section {
      display: flex;
      gap: 0.5rem;
      height: 2rem;
      margin-top: 0.5rem;
    }
  }

  h3 {
    margin-left: 3.125rem;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    line-height: 20.8px;
    color: ${(props) => props.theme['base-text']};
  }
`
export const Amount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 4.5rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  button {
    border: none;
    background: transparent;
    display: flex;
    color: ${(props) => props.theme['purple-medium']};
    cursor: pointer;
  }
`
export const Delete = styled.button`
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  background: ${(props) => props.theme['base-button']};
  padding: 0 8px;
  cursor: pointer;

  span {
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 19.2px;
    color: ${(props) => props.theme['base-text']};
  }
`
export const AmountTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  font-size: 14px;
  line-height: 18.2px;
  color: ${(props) => props.theme['base-text']};
`
export const ItensTotal = styled.div`
  display: flex;
  justify-content: space-between;
`
export const DeliveryPrice = styled.div`
  display: flex;
  justify-content: space-between;
`
export const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 1.25rem;
  font-weight: 700;
  line-height: 26px;

  color: ${(props) => props.theme['base-subtitle']};
`
