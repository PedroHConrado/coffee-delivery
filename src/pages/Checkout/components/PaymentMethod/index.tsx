import { CreditCard, Bank, Money, CurrencyDollar } from 'phosphor-react'
import { ContentContainer, PaymentCard, PaymentInfo } from './styles'
import { useFormContext } from 'react-hook-form'

export function PaymentMethod() {
  const { register } = useFormContext()

  return (
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
          <input
            id="credit_card"
            value="credit_card"
            type="radio"
            {...register('paymentMethod')}
          />
          <label htmlFor="credit_card">
            <ContentContainer>
              <CreditCard size={16} />
              CARTÃO DE CREDITO
            </ContentContainer>
          </label>
        </PaymentCard>
        <PaymentCard>
          <input id="debit_card" type="radio" {...register('paymentMethod')} />
          <label htmlFor="debit_card">
            <ContentContainer>
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </ContentContainer>
          </label>
        </PaymentCard>
        <PaymentCard>
          <input id="money" type="radio" {...register('paymentMethod')} />
          <label htmlFor="money">
            <ContentContainer>
              <Money size={16} />
              DINHEIRO
            </ContentContainer>
          </label>
        </PaymentCard>
      </main>
    </PaymentInfo>
  )
}
