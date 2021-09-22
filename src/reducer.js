// items
import cartItems from './cart-items'

import {
  INCREASE,
  DECREASE,
  REMOVE_ITEM,
  CLEAR_CART,
  COUNT_TOTALS,
} from './actions'

const initialSore = {
  cart: cartItems,
  total: 0,
  amount: 0,
}

const reducer = (state = initialSore, action) => {
  if (action.type === INCREASE)
    return {
      ...state,
      cart: toggleAmount(state.cart, action.payload.id, true),
    }
  if (action.type === DECREASE) {
    const { id, amount } = action.payload
    if (amount <= 1)
      return {
        ...state,
        cart: removeItem(state.cart, id),
      }

    return {
      ...state,
      cart: toggleAmount(state.cart, id, false),
    }
  }
  if (action.type === COUNT_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (totals, item) => {
        return {
          ...totals,
          amount: totals.amount + item.amount,
          total: totals.total + item.amount * item.price,
        }
      },
      { total: 0, amount: 0 }
    )

    total = parseFloat(total.toFixed(2))
    return { ...state, total, amount }
  }
  if (action.type === REMOVE_ITEM)
    return {
      ...state,
      cart: removeItem(state.cart, action.payload),
    }
  if (action.type === CLEAR_CART) return { ...state, cart: [] }

  return state
}

const toggleAmount = (cart, id, isInc) =>
  cart.map((item) => {
    if (item.id === id)
      item = { ...item, amount: isInc ? item.amount + 1 : item.amount - 1 }
    return item
  })

const removeItem = (cart, id) => cart.filter((item) => item.id !== id)

export default reducer
