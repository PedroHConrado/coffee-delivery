import { NavLink } from 'react-router-dom'
import { EmptyBagContainer, TextToEmptyBag } from './styles'

export function EmptyBag() {
  return (
    <EmptyBagContainer>
      <TextToEmptyBag>Sua sacola está vazia</TextToEmptyBag>
      <NavLink to="/" title="Home">
        CONTINUAR COMPRANDO
      </NavLink>
    </EmptyBagContainer>
  )
}
