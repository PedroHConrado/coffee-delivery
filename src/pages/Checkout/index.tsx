import { CheckoutContainer, OrderContainer } from './styles'
import { OrderForm } from './components/OrderForm'
import { CoffeeSelected } from './components/CoffeeSelected'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { PaymentMethod } from './components/PaymentMethod'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

enum PaymentMethods {
  credit_card = 'credit_card',
  debit_card = 'debit_card',
  money = 'money',
}

const OrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Campo obrigatório'),
  rua: zod.string().min(1, 'Campo obrigatório'),
  numero: zod.number().min(1),
  complemento: zod.string().min(1, 'Campo obrigatório'),
  bairro: zod.string().min(1, 'Campo obrigatório'),
  cidade: zod.string().min(1, 'Campo obrigatório'),
  uf: zod.string().min(1, 'Campo obrigatório'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

type OrderFormData = zod.infer<typeof OrderFormValidationSchema>

export function Checkout() {
  const confirmOrderForm = useForm<OrderFormData>({
    resolver: zodResolver(OrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()
  const { cleanCart } = useCart()

  function handleConfirmOrder(data: OrderFormData) {
    console.log('chegou aqi')
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <OrderContainer>
          <OrderForm />
          <PaymentMethod />
        </OrderContainer>
        <CoffeeSelected />
      </CheckoutContainer>
    </FormProvider>
  )
}
