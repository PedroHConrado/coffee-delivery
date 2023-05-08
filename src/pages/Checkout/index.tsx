import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Minus,
  Plus,
  Trash,
} from 'phosphor-react'
import {
  AddressInfo,
  CheckoutContainer,
  OrderInformation,
  PaymentInfo,
  PaymentCard,
  ClientInformation,
  InputCep,
  InputStreet,
  InputNumber,
  InputAdjuct,
  InputCity,
  InputNeighborhood,
  InputState,
  OrderSumary,
  AmountTotal,
  OrdemItem,
  TotalAmount,
  DeliveryPrice,
  ItensTotal,
  Amount,
  Delete,
} from './styles'
import Img from '../../assets/Americano.svg'
import { NavLink } from 'react-router-dom'

export function Checkout() {
  return (
    <CheckoutContainer>
      <ClientInformation>
        <h3>Complete seu pedido</h3>
        <AddressInfo>
          <header>
            <MapPinLine size={22} />
            <div>
              <span>Pagamento</span>
              <small>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </small>
            </div>
          </header>
          <main>
            <InputCep type="text" placeholder="CEP" />
            <InputStreet type="text" placeholder="Rua" />
            <InputNumber type="text" placeholder="Número" />
            <InputAdjuct type="text" placeholder="Complemento" />
            <InputNeighborhood type="text" placeholder="Bairro" />
            <InputCity type="text" placeholder="Cidade" />
            <InputState type="text" placeholder="UF" />
          </main>
        </AddressInfo>
        <PaymentInfo>
          <header>
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <small>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </small>
            </div>
          </header>
          <main>
            <PaymentCard>
              <CreditCard />
              <span>CARTÃO DE CRÉDITO</span>
            </PaymentCard>
            <PaymentCard>
              <Bank />
              <span>CARTÃO DE DÉBITO</span>
            </PaymentCard>
            <PaymentCard>
              <Money />
              <span>DINHEIRO</span>
            </PaymentCard>
          </main>
        </PaymentInfo>
      </ClientInformation>

      <OrderInformation>
        <h3>Cafés selecionados</h3>
        <OrderSumary>
          <OrdemItem>
            <img src={Img} alt="" />
            <main>
              Expresso Tradicional
              <section>
                <Amount>
                  <button>
                    <Minus size={14} />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus size={14} />
                  </button>
                </Amount>
                <Delete>
                  <Trash size={16} color="#8047F8" />
                  <span>REMOVER</span>
                </Delete>
              </section>
            </main>
            <h3>R$ 9,90</h3>
          </OrdemItem>
          <OrdemItem>
            <img src={Img} alt="" />
            <main>
              <p>Expresso Tradicional</p>
              <section>
                <Amount>
                  <button>
                    <Minus size={14} />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus size={14} />
                  </button>
                </Amount>
                <Delete>
                  <Trash size={16} color="#8047F8" />
                  <span>REMOVER</span>
                </Delete>
              </section>
            </main>
            <h3>R$ 9,90</h3>
          </OrdemItem>
          <AmountTotal>
            <ItensTotal>
              <small>Total de itens</small>
              <span>R$ 29,70</span>
            </ItensTotal>
            <DeliveryPrice>
              <small>Entrega</small>
              <span>R$ 3,50</span>
            </DeliveryPrice>
            <TotalAmount>
              <h3>Total</h3>
              <span>R$ 33,20</span>
            </TotalAmount>
          </AmountTotal>
          <NavLink to="/success" title="Success">
            CONFIMAR PEDIDO
          </NavLink>
        </OrderSumary>
      </OrderInformation>
    </CheckoutContainer>
  )
}
