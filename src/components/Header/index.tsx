import Logo from '../../assets/Logo.svg'
import { HeaderContainer, Location } from './styles'
import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CartButton } from '../CartButton'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} alt="coffe-cup" />
      </NavLink>

      <div>
        <Location>
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </Location>
        <NavLink to="/checkout" title="Checkout">
          <CartButton background="yellow-light" color="yellow-dark" />
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
