import { Grid2 } from '@mui/material'
import Product from './Product'
import { IProduct } from '../../model/IProduct'

interface Props {
  products: IProduct[]
}

export default function ProductList({ products }: Props) {
  return (
    <Grid2 container spacing={2}>
      {products.map((p: IProduct) => (
        <Grid2 size={{ xs: 12, md: 4, lg: 3 }} key={p.id}>
          <Product key={p.id} product={p} />
        </Grid2>
      ))}
    </Grid2>
  )
}
