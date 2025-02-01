const products = [
  { id: 1, name: 'Product 1', price: 100, isActive: true },
  { id: 2, name: 'Product 2', price: 200, isActive: true },
  { id: 3, name: 'Product 3', price: 300, isActive: false },
]

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
  return (
    <>
      <h2>Product List</h2>
      {products.map((p) => p.isActive && <Product key={p.id} products={p} />)}
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
