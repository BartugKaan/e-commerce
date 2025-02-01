import { useEffect, useState } from 'react'
import { IProduct } from '../model/IProduct'
import Header from './Header'
import ProductList from './ProductList'

function App() {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    fetch('http://localhost:5247/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  function addProduct() {
    setProducts([
      ...products,
      {
        id: Date.now(),
        name: 'Product 4',
        price: 400,
        isActive: true,
        description: 'Test Description',
        imageUrl: '4.jpg',
        stock: 10,
      },
    ])
  }
  return (
    <>
      <Header products={products} />
      <ProductList products={products} addProduct={addProduct} />
    </>
  )
}

export default App
