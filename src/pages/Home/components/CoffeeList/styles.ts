import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  margin-top: 8.75rem;

  @media (max-width: 1168px) {
    text-align: center;
  }
`
export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  grid-gap: 2rem;
`
export const Title = styled.h2`
  font-size: 32px;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};

  margin: 2rem 0 0.875rem 0;

  @media (max-width: 1168px) {
    text-align: center;
  }
`
