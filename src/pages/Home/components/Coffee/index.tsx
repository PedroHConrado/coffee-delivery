import { Minus, Plus } from 'phosphor-react'
import { CartButton } from '../../../../components/CartButton'
import { ICoffee } from '../CoffeeList'
import {
  Amount,
  CoffeeContainer,
  CoffeeInformation,
  Price,
  Tag,
} from './styles'

export function Coffee({ description, name, price, tag, img }: ICoffee) {
  return (
    <CoffeeContainer>
      <CoffeeInformation>
        <img src={img} alt="" />
        <header>
          {tag.length > 1 ? (
            tag.map((tag) => <Tag key={tag}>{tag}</Tag>)
          ) : (
            <Tag>{tag[0]}</Tag>
          )}
        </header>

        <main>
          <p>{name}</p>
          <small>{description}</small>
        </main>
        <footer>
          <Price>
            R${' '}
            <strong>
              {price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
            </strong>
          </Price>
          <div>
            <Amount>
              <button>
                <Minus />
              </button>
              <span>1</span>
              <button>
                <Plus />
              </button>
            </Amount>
            <CartButton background="purple-dark" color="base-card" />
          </div>
        </footer>
      </CoffeeInformation>
    </CoffeeContainer>
  )
}
