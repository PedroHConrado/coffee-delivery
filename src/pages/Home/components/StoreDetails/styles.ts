import styled from 'styled-components'

export const StoreDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.5rem;
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 29.75rem;
    height: 22.5rem;
  }

  @media (max-width: 1168px) {
    flex-direction: column;
    font-size: 14px;

    img {
      order: -1;
    }
  }
`
export const Description = styled.section`
  width: 36.75rem;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 3.9rem;

    font-family: 'Baloo 2';
  }

  p {
    font-size: 1.25rem;
    line-height: 1.625rem;
  }
`
export const Details = styled.section`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 40px;
`
export const Item = styled.article`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 12px;
`
export const Icon = styled.div`
  padding: 8px;
  border-radius: 50%;

  color: ${(props) => props.theme.white};
`
export const Cart = styled(Icon)`
  background: ${(props) => props.theme['yellow-dark']};
`
export const Clock = styled(Icon)`
  background: ${(props) => props.theme['yellow-medium']};
`
export const Pack = styled(Icon)`
  background: ${(props) => props.theme['base-text']};
`
export const CoffeeCup = styled(Icon)`
  background: ${(props) => props.theme['purple-medium']};
`
