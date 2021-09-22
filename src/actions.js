export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const CLEAR_CART = 'CLEAR_CART'
export const COUNT_TOTALS = 'COUNT_TOTALS'

export const removeItem = (id) => {
  return { type: REMOVE_ITEM, payload: id }
}
