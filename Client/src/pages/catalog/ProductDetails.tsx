import {
  Box,
  CircularProgress,
  Container,
  Divider,
  Grid2,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { IProduct } from '../../model/IProduct'
import request from '../../api/Request'

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<IProduct | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    id &&
      request.Catalog.details(parseInt(id))
        .then((data) => setProduct(data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    )
  }

  if (!product) {
    return (
      <Container>
        <Typography variant="h2">Product not found!!</Typography>
      </Container>
    )
  }

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ lg: 4, md: 5, sm: 12, xs: 12 }}>
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            component="img"
            src={`http://localhost:5247/images/${product.imageUrl}`}
            sx={{
              width: { lg: '100%', md: '80%', sm: '60%', xs: '40%' },
            }}
          />
        </Container>
      </Grid2>
      <Grid2 size={{ lg: 8, md: 7, sm: 6, xs: 12 }} textAlign="center">
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{ mb: 2, mt: 1 }} />
        <Typography variant="h4" color="secondary">
          {product.price.toFixed(2)}₺
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{product.description} </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Stock</TableCell>
                <TableCell>{product.stock} </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid2>
    </Grid2>
  )
}
