import { useEffect, useState } from 'react'
import { IProduct } from './model/IProduct'

function App() {
  return (
    <>
      <Header />
      <ProductList />
    </>
  )
}

function Header() {
  return <h1>Header</h1>
}

function ProductList() {
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
      <h2>Product List</h2>
      {products.map((p) => p.isActive && <Product key={p.id} products={p} />)}

      <button onClick={() => addProduct()}>Add Product</button>
    </>
  )
}

function Product(props: any) {
  return (
    <>
      <h3>
        {props.products.name} - <b>{props.products.price}</b>
      </h3>
    </>
  )
}

export default App
