import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
`
export const CoffeeInformation = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 20px;

  img {
    width: 7.5rem;
    height: 7.5rem;
  }

  header {
    margin-top: 12px;
    display: flex;
    gap: 0.25rem;
  }

  main {
    width: 13.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 16px;

    p {
      font-size: 20px;
      font-family: 'Baloo 2', sans-serif;
      font-weight: 700;
      line-height: 26px;
      color: ${(props) => props.theme['base-subtitle']};
    }

    small {
      font-size: 14px;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      line-height: 18.2px;
      color: ${(props) => props.theme['base-label']};
      text-align: center;
      margin-top: 8px;
    }
  }

  footer {
    width: 13rem;
    height: 2.375rem;
    margin-top: 33px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      width: 7.375rem;
      display: flex;
      gap: 10px;
    }
  }
`
export const Price = styled.span`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 18.2px;
  color: ${(props) => props.theme['base-text']};
  margin-right: 23px;

  strong {
    font-size: 24px;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    line-height: 31.2px;
  }
`
export const Amount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
export const Tag = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 100px;
  border: none;
  padding: 4px 8px;

  font-size: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  line-height: 13px;
`
