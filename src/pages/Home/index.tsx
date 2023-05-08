import { CoffeeList } from './components/CoffeeList'
import { StoreDetails } from './components/StoreDetails'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <StoreDetails />
      <CoffeeList />
    </HomeContainer>
  )
}
