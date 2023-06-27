import styled from 'styled-components'

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

  &:hover {
    background: ${(props) => props.theme['purple-light']};
  }

  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked div {
    background: red;
  }

  label {
    font-size: 12px;
    color: ${(props) => props.theme['base-text']};
    line-height: 19.2px;
  }
`

export const ContentContainer = styled.div``
