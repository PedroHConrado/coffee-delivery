import styled from 'styled-components'
import { Icon } from '../Home/components/StoreDetails/styles'

export const SuccessContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
`

export const DetailsOrder = styled.div`
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.625rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.625rem;
    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 40px;
  }

  main {
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border: 1px solid transparent;
    border-radius: 6px 36px;
    background: linear-gradient(white, white) padding-box,
      linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%) border-box;

    div {
      display: flex;
      flex-direction: column;

      p,
      strong {
        color: ${(props) => props.theme['base-text']};
      }
    }
  }
`

export const Adress = styled(Icon)`
  background: ${(props) => props.theme['purple-medium']};
`
export const TypePayment = styled(Icon)`
  background: ${(props) => props.theme['yellow-dark']};
`
