import { Adress, DetailsOrder, SuccessContainer, TypePayment } from './styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import Image from '../../assets/Illustration.svg'
import { Clock, Item } from '../Home/components/StoreDetails/styles'
import { OrderFormData } from '../Checkout'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

interface LocationType {
  state: OrderFormData
}

const paymentMethodsModel = {
  credit_card: 'Cartão de crédito',
  debit_card: 'Cartão de débito',
  money: 'Dinheiro',
}

export function Success() {
  const { state } = useLocation() as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>

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
                Entrega em{' '}
                <strong>
                  {state.rua}, {state.numero}
                </strong>
              </span>
              <span>
                {state.bairro} - {state.cidade}, {state.uf}
              </span>
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
              <strong>{paymentMethodsModel[state.paymentMethod]}</strong>
            </div>
          </Item>
        </main>
      </DetailsOrder>
      <img src={Image} alt="" />
    </SuccessContainer>
  )
}
