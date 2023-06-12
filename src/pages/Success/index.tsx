import { Adress, DetailsOrder, SuccessContainer, TypePayment } from './styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import Image from '../../assets/Illustration.svg'
import { Clock, Item } from '../Home/components/StoreDetails/styles'

export function Success() {
  return (
    <SuccessContainer>
      <DetailsOrder>
        <header>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </header>
        <main>
          <Item>
            <Adress>
              <MapPin weight="fill" />
            </Adress>
            <div>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos- Porto Alegre, RS</span>
            </div>
          </Item>
          <Item>
            <Clock>
              <Timer weight="fill" />
            </Clock>
            <div>
              <span>Previsão de entrega</span>
              <strong>20min - 30min</strong>
            </div>
          </Item>
          <Item>
            <TypePayment>
              <CurrencyDollar weight="fill" />
            </TypePayment>
            <div>
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </div>
          </Item>
        </main>
      </DetailsOrder>
      <img src={Image} alt="" />
    </SuccessContainer>
  )
}
