import {
  Cart,
  Clock,
  CoffeeCup,
  Description,
  Details,
  Item,
  Pack,
  StoreDetailsContainer,
} from './styles'
import Capa from '../../../../assets/Capa.svg'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function StoreDetails() {
  return (
    <StoreDetailsContainer>
      <div>
        <Description>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Description>
        <Details>
          <Item>
            <Cart>
              <ShoppingCart weight="fill" />
            </Cart>
            Compra simples e segura
          </Item>
          <Item>
            <Pack>
              <Package weight="fill" />
            </Pack>
            Embalagem mantém o café intacto
          </Item>
          <Item>
            <Clock>
              <Timer weight="fill" />
            </Clock>
            Entrega rápida e rastreada
          </Item>
          <Item>
            <CoffeeCup>
              <Coffee weight="fill" />
            </CoffeeCup>
            O café chega fresquinho até você
          </Item>
        </Details>
      </div>
      <img src={Capa} alt="" />
    </StoreDetailsContainer>
  )
}
