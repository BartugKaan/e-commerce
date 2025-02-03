import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { IProduct } from '../../model/IProduct'

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState<IProduct | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:5247/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return <Typography variant="h2">Loading...</Typography>
  }

  if (!product) {
    return <Typography variant="h2">Product not found!!</Typography>
  }

  return <Typography variant="h2">{product.name} </Typography>
}
