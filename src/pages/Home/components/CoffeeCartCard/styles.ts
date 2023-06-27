import styled from 'styled-components'

export const CoffeeCartCardContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;

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
