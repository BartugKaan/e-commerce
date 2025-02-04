import { Button, Container } from '@mui/material'
import request from '../api/Request'

export default function ErrorPage() {
  return (
    <Container>
      <Button
        sx={{ mr: 2 }}
        variant="contained"
        color="primary"
        onClick={() =>
          request.Errors.get400Error().catch((error) => console.log(error))
        }
      >
        400 Error
      </Button>
      <Button
        sx={{ mr: 2 }}
        variant="contained"
        color="primary"
        onClick={() =>
          request.Errors.get401Error().catch((error) => console.log(error))
        }
      >
        401 Error
      </Button>
      <Button
        sx={{ mr: 2 }}
        variant="contained"
        color="primary"
        onClick={() =>
          request.Errors.get404Error().catch((error) => console.log(error))
        }
      >
        404 Error
      </Button>
      <Button
        sx={{ mr: 2 }}
        variant="contained"
        color="primary"
        onClick={() =>
          request.Errors.get500Error().catch((error) => console.log(error))
        }
      >
        500 Error
      </Button>
      <Button
        sx={{ mr: 2 }}
        variant="contained"
        color="primary"
        onClick={() =>
          request.Errors.getValidationError().catch((error) =>
            console.log(error)
          )
        }
      >
        Validation Error
      </Button>
    </Container>
  )
}
