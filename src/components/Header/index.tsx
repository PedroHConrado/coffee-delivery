import Logo from '../../assets/Logo.svg'
import { useCart } from '../../hooks/useCart'
import { CartButtonContainer, HeaderContainer, Location } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { amountItems } = useCart()

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
          <CartButtonContainer>
            {amountItems >= 1 && <span>{amountItems}</span>}
            <ShoppingCart size={24} weight="fill" />
          </CartButtonContainer>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
