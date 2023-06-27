import { useEffect, useState } from 'react'
import { api } from '../../../../services/api'
import { Coffee } from '../Coffee'
import { CoffeeListContainer, List, Title } from './styles'

export interface ICoffee {
  id: number
  name: string
  tag: string[]
  description: string
  price: number
  img: string
}

export function CoffeeList() {
  const [coffees, setCoffees] = useState<ICoffee[]>([])

  useEffect(() => {
    async function getCoffees() {
      const response = await api.get('/coffees')

      setCoffees(response.data)
    }
    getCoffees()
  }, [])

  return (
    <CoffeeListContainer>
      <Title>Nossos cafés</Title>
      <List>
        {coffees.map((coffee) => (
          <Coffee key={coffee.id} coffee={coffee} />
        ))}
      </List>
    </CoffeeListContainer>
  )
}
