import { SuccessContainer } from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <header>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </header>
        <main>
          <div>
            <img src="" alt="" />
            <span>Entrega em Rua João Daniel Martinelli, 102</span>
            <span>Farrapos- Porto Alegre, RS</span>
          </div>
          <div>
            <img src="" alt="" />
            <span>Previsão de entrega</span>
            <span>20min - 30min</span>
          </div>
          <div>
            <img src="" alt="" />
            <span>Pagamento na entrega</span>
            <span>Cartão de Crédito</span>
          </div>
        </main>
      </div>
      <img src="" alt="" />
    </SuccessContainer>
  )
}
