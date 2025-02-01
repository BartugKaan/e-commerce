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
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </>
  )
}

function Product() {
  return <h3>Product</h3>
}

export default App
