import { CreditCard, Bank, Money, CurrencyDollar } from 'phosphor-react'
import { PaymentCard, PaymentInfo } from './styles'
import { useFormContext } from 'react-hook-form'
import { useState } from 'react'

export function PaymentMethod() {
  const { register } = useFormContext()
  const [paymentMethod, setpaymentMethod] = useState('credit_card')

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
            value="credit_card"
            type="radio"
            checked={paymentMethod === 'credit_card'}
            onChange={() => setpaymentMethod('credit_card')}
          />
          <CreditCard />
          <label htmlFor="credit_card">CARTÃO DE CRÉDITO</label>
        </PaymentCard>

        <PaymentCard>
          <input
            value="debit_card"
            type="radio"
            checked={paymentMethod === 'debit_card'}
            onChange={() => setpaymentMethod('debit_card')}
          />
          <Bank />
          <label htmlFor="debit_card">CARTÃO DE DÉBITO</label>
        </PaymentCard>

        <PaymentCard>
          <Money />
          <label htmlFor="money">
            <input
              value="money"
              type="radio"
              checked={paymentMethod === 'money'}
              onChange={() => setpaymentMethod('money')}
            />
            DINHEIRO
          </label>
        </PaymentCard>
      </main>
    </PaymentInfo>
  )
}
