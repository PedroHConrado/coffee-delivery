import styled from 'styled-components'

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
export const ClientInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
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
