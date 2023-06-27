import { AdressContainer, CheckoutContainer } from './styles'

import { OrderForm } from './components/OrderForm'
import { CoffeeSelected } from './components/CoffeeSelected'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { PaymentMethod } from './components/PaymentMethod'

const OrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Campo obrigatório'),
  rua: zod.string().min(1, 'Campo obrigatório'),
  numero: zod.number().min(1),
  complemento: zod.string().min(1, 'Campo obrigatório'),
  bairro: zod.string().min(1, 'Campo obrigatório'),
  cidade: zod.string().min(1, 'Campo obrigatório'),
  uf: zod.string().min(1, 'Campo obrigatório'),
})

export function Checkout() {
  const confirmOrderForm = useForm({
    resolver: zodResolver(OrderFormValidationSchema),
  })

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer>
        <AdressContainer>
          <OrderForm />
          <PaymentMethod />
        </AdressContainer>
        <CoffeeSelected />
      </CheckoutContainer>
    </FormProvider>
  )
}
