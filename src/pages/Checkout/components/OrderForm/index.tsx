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
} from './styles'
import { useFormContext } from 'react-hook-form'

export function OrderForm() {
  const { register } = useFormContext()

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
          <InputCep placeholder="CEP" {...register('cep')} />
          <InputStreet placeholder="Rua" {...register('rua')} />
          <InputNumber
            type="number"
            placeholder="Número"
            {...register('numero', { valueAsNumber: true })}
          />
          <InputAdjuct placeholder="Complemento" {...register('complemento')} />
          <InputNeighborhood placeholder="Bairro" {...register('bairro')} />
          <InputCity placeholder="Cidade" {...register('cidade')} />
          <InputState placeholder="UF" {...register('uf')} />
        </main>
      </AddressInfo>
    </ClientInformation>
  )
}
