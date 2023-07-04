import styled from 'styled-components'

export const OrderInformation = styled.div`
  width: 28rem;
`
export const OrderSumary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 28rem;
  height: auto;
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
export const ConfirmedButton = styled.button`
  border: none;
  text-align: center;
  padding: 12px;
  border-radius: 6px;

  background: ${(props) => props.theme['yellow-medium']};

  color: ${(props) => props.theme.white};
  font-size: 14px;
  font-weight: 700;
  line-height: 22.4px;
`
