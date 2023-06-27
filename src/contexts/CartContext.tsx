import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../services/api'
import { ICoffee } from '../pages/Home/components/CoffeeList'
import { produce } from 'immer'

export interface IProduct extends ICoffee {
  amount: number
}

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextData {
  cartItems: IProduct[]
  amountItems: number
  cartItemsTotal: number
  addCoffeeToCart: (coffee: IProduct) => void
  updateCoffeeAmount: (
    coffeeId: number,
    type: 'increment' | 'decrement',
  ) => void
  removeCartItem: (coffeeId: number) => void
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffeeDelivery:cartItems'

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)

    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })

  const amountItems = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, coffee) => {
    return total + coffee.price * coffee.amount
  }, 0)

  function addCoffeeToCart(coffee: IProduct) {
    const coffeeExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeExistsInCart].amount += coffee.amount
      }
    })

    setCartItems(newCart)
  }

  function updateCoffeeAmount(
    coffeeId: number,
    type: 'increment' | 'decrement',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === coffeeId,
      )

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].amount =
          type === 'increment' ? item.amount + 1 : item.amount - 1
      }
    })

    setCartItems(newCart)
  }

  function removeCartItem(coffeeId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === coffeeId,
      )

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        amountItems,
        cartItemsTotal,
        addCoffeeToCart,
        updateCoffeeAmount,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
