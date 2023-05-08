import { ShoppingCart } from 'phosphor-react'
import { CartButtonContainer } from './styles'

export interface CartButtonProps {
  background: 'yellow-light' | 'purple-dark'
  color: 'yellow-dark' | 'base-card'
}

export function CartButton({ background, color }: CartButtonProps) {
  return (
    <CartButtonContainer background={background} color={color}>
      <ShoppingCart size={24} weight="fill" />
    </CartButtonContainer>
  )
}
