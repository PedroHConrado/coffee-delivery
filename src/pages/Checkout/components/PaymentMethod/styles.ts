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
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    border-color: ${(props) => props.theme['purple-medium']};
    background: ${(props) => props.theme['purple-light']};
  }
`
export const ContentContainer = styled.div`
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  padding: 1rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 6px;
  width: 11.17rem;
  margin-top: 2rem;
  font-size: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme['purple-medium']};
  }
`
