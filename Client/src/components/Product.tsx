import { IProduct } from '../model/IProduct'

interface Props {
  product: IProduct
}

export default function Product({ product }: Props) {
  return (
    <>
      {product.isActive ? (
        <>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.stock}</p>
        </>
      ) : (
        <>
          <h3>{product.name} - This product is not active</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.stock}</p>
        </>
      )}
    </>
  )
}
