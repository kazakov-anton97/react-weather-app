var productsApiData = [
  {
    id: 1,
    name: 'Double-Layered Top',
    price: '666.99 $'
  },
  {
    id: 2,
    name: 'Double-Layered Jacket',
    price: '799.99 $'

  },
  {
    id: 3,
    name: 'Double-Layered Shirt',
    price: '899.99 $'

  },
  {
    id: 4,
    name: 'Double-Layered Jeans',
    price: '999.99 $'

  }
];

export const getProducts = () => dispatch => {
  setTimeout(() => {
    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: productsApiData })
  }, 2000)
}