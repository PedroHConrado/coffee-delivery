import { CheckoutContainer, OrderContainer } from './styles'
import { OrderForm } from './components/OrderForm'
import { CoffeeSelected } from './components/CoffeeSelected'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { PaymentMethod } from './components/PaymentMethod'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { EmptyBag } from './components/EmptyBag'
import { transformName } from '../../utils/transformName'

enum PaymentMethods {
  credit_card = 'credit_card',
  debit_card = 'debit_card',
  money = 'money',
}

const OrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Campo obrigatório'),
  rua: zod
    .string()
    .min(1, 'Campo obrigatório')
    .transform((rua) => transformName(rua)),
  numero: zod.string().min(1, 'Campo obrigatório'),
  complemento: zod.string().min(1, 'Campo obrigatório').optional(),
  bairro: zod
    .string()
    .min(1, 'Campo obrigatório')
    .transform((bairro) => transformName(bairro)),
  cidade: zod
    .string()
    .min(1, 'Campo obrigatório')
    .transform((cidade) => transformName(cidade)),
  uf: zod
    .string()
    .min(1, 'Campo obrigatório')
    .transform((uf) => uf.toUpperCase()),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type OrderFormData = zod.infer<typeof OrderFormValidationSchema>

export function Checkout() {
  const { cartItems } = useCart()

  const confirmOrderForm = useForm<OrderFormData>({
    resolver: zodResolver(OrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()
  const { cleanCart } = useCart()

  function handleConfirmOrder(data: OrderFormData) {
    navigate('/success', {
      state: data,
    })
    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      {cartItems.length >= 1 ? (
        <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
          <OrderContainer>
            <OrderForm />
            <PaymentMethod />
          </OrderContainer>
          <CoffeeSelected />
        </CheckoutContainer>
      ) : (
        <EmptyBag />
      )}
    </FormProvider>
  )
}
