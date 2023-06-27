import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { ICoffee } from '../CoffeeList'
import {
  Amount,
  CartButtonContainer,
  CoffeeContainer,
  CoffeeInformation,
  Price,
  Tag,
} from './styles'
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'

interface CoffeeProps {
  coffee: ICoffee
}

export function Coffee({ coffee }: CoffeeProps) {
  const { addCoffeeToCart } = useCart()
  const [amount, setAmount] = useState(1)

  function handleIncrement() {
    setAmount((state) => state + 1)
  }
  function handleDecrement() {
    setAmount((state) => state - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      amount,
    }

    addCoffeeToCart(coffeeToAdd)
  }

  return (
    <CoffeeContainer>
      <CoffeeInformation>
        <img src={coffee.img} alt="" />
        <header>
          {coffee.tag.length > 1 ? (
            coffee.tag.map((tag) => <Tag key={tag}>{tag}</Tag>)
          ) : (
            <Tag>{coffee.tag[0]}</Tag>
          )}
        </header>

        <main>
          <p>{coffee.name}</p>
          <small>{coffee.description}</small>
        </main>
        <footer>
          <Price>
            R${' '}
            <strong>
              {coffee.price.toLocaleString('pt-br', {
                minimumFractionDigits: 2,
              })}
            </strong>
          </Price>
          <div>
            <Amount>
              <button disabled={amount <= 1} onClick={handleDecrement}>
                <Minus />
              </button>
              <span>{amount}</span>
              <button onClick={handleIncrement}>
                <Plus />
              </button>
            </Amount>
            <CartButtonContainer onClick={handleAddToCart}>
              <ShoppingCart size={24} weight="fill" />
            </CartButtonContainer>
          </div>
        </footer>
      </CoffeeInformation>
    </CoffeeContainer>
  )
}
