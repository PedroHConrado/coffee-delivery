import { useEffect, useState } from 'react'
import { api } from '../../../../services/api'
import { Coffee } from '../Coffee'
import { CoffeeListContainer, List, Title } from './styles'

export interface ICoffee {
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
          <Coffee
            key={coffee.name}
            name={coffee.name}
            tag={coffee.tag}
            description={coffee.description}
            price={coffee.price}
            img={coffee.img}
          />
        ))}
      </List>
    </CoffeeListContainer>
  )
}
