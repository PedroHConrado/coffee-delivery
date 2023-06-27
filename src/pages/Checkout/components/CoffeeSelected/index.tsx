import { NavLink } from 'react-router-dom'
import { formatMoney } from '../../../../utils/formatMoney'
import { CoffeeCartCard } from '../../../Home/components/CoffeeCartCard'
import {
  OrderInformation,
  OrderSumary,
  AmountTotal,
  ItensTotal,
  DeliveryPrice,
  TotalAmount,
} from './styles'
import { useCart } from '../../../../hooks/useCart'

export function CoffeeSelected() {
  const { cartItems, cartItemsTotal } = useCart()

  const totalCoffee = cartItemsTotal + 3.5

  return (
    <OrderInformation>
      <h3>Cafés selecionados</h3>
      <OrderSumary>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}

        <AmountTotal>
          <ItensTotal>
            <small>Total de itens</small>
            <span>R$ {formatMoney(cartItemsTotal)}</span>
          </ItensTotal>
          <DeliveryPrice>
            <small>Entrega</small>
            <span>R$ 3,50</span>
          </DeliveryPrice>
          <TotalAmount>
            <h3>Total</h3>
            <span>R$ {formatMoney(totalCoffee)}</span>
          </TotalAmount>
        </AmountTotal>
        <NavLink to="/success" title="Success">
          CONFIMAR PEDIDO
        </NavLink>
      </OrderSumary>
    </OrderInformation>
  )
}
