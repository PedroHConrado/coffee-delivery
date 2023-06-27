import { Minus, Plus, Trash } from 'phosphor-react'
import { formatMoney } from '../../../../utils/formatMoney'
import { Amount, CoffeeCartCardContainer } from './styles'
import { IProduct } from '../../../../contexts/CartContext'
import { useCart } from '../../../../hooks/useCart'
import { Delete } from '../../../Checkout/components/CoffeeSelected/styles'

interface CoffeeCartCardProps {
  coffee: IProduct
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { updateCoffeeAmount, removeCartItem } = useCart()

  function handleIncrement() {
    updateCoffeeAmount(coffee.id, 'increment')
  }
  function handleDecrement() {
    updateCoffeeAmount(coffee.id, 'decrement')
  }

  function handleRemoveCart() {
    removeCartItem(coffee.id)
  }

  return (
    <CoffeeCartCardContainer>
      <img src={coffee.img} alt="" />
      <main>
        {coffee.name}
        <section>
          <Amount>
            <button onClick={handleDecrement}>
              <Minus size={14} />
            </button>
            <span>{coffee.amount}</span>
            <button onClick={handleIncrement}>
              <Plus size={14} />
            </button>
          </Amount>
          <Delete onClick={handleRemoveCart}>
            <Trash size={16} color="#8047F8" />
            <span>REMOVER</span>
          </Delete>
        </section>
      </main>
      <h3>R$ {formatMoney(coffee.price)}</h3>
    </CoffeeCartCardContainer>
  )
}
