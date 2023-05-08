import styled from 'styled-components'

export const CoffeeListContainer = styled.div``
export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 2rem;
`
export const Title = styled.h2`
  font-size: 32px;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};

  margin: 2rem 0 0.875rem 0;
`
