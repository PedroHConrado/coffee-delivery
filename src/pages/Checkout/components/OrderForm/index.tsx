import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import {
  AddressInfo,
  InputCep,
  InputStreet,
  InputNumber,
  InputAdjuct,
  InputNeighborhood,
  InputCity,
  InputState,
  ClientInformation,
  Input,
  WarningError,
} from './styles'
import { useFormContext } from 'react-hook-form'
import { OrderFormData } from '../..'

export function OrderForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<OrderFormData>()

  return (
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
          <InputCep>
            <Input placeholder="CEP" {...register('cep')} />
            {errors.cep && <WarningError>{errors.cep?.message}</WarningError>}
          </InputCep>
          <InputStreet>
            <Input placeholder="Rua" {...register('rua')} />
            {errors.rua && <WarningError>{errors.rua?.message}</WarningError>}
          </InputStreet>
          <InputNumber>
            <Input type="number" placeholder="Número" {...register('numero')} />
            {errors.numero && (
              <WarningError>{errors.numero?.message}</WarningError>
            )}
          </InputNumber>
          <InputAdjuct>
            <Input placeholder="Complemento" {...register('complemento')} />
            {errors.complemento && (
              <WarningError>{errors.complemento?.message}</WarningError>
            )}
          </InputAdjuct>
          <InputNeighborhood>
            <Input placeholder="Bairro" {...register('bairro')} />
            {errors.bairro && (
              <WarningError>{errors.bairro?.message}</WarningError>
            )}
          </InputNeighborhood>
          <InputCity>
            <Input placeholder="Cidade" {...register('cidade')} />
            {errors.cidade && (
              <WarningError>{errors.cidade?.message}</WarningError>
            )}
          </InputCity>
          <InputState>
            <Input placeholder="UF" {...register('uf')} />
            {errors.uf && <WarningError>{errors.uf?.message}</WarningError>}
          </InputState>
        </main>
      </AddressInfo>
    </ClientInformation>
  )
}
