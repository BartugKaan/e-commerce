import { ShoppingCart } from '@mui/icons-material'
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import { NavLink } from 'react-router'

const links = [
  { title: 'Home', to: '/' },
  { title: 'About', to: '/about' },
  { title: 'Contact', to: '/contact' },
  { title: 'Catalog', to: '/catalog' },
]

const navStyles = {
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    color: 'text.primary',
  },
}

export default function Header() {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ mx: 4 }}>
            E-Commerce
          </Typography>
          <Stack direction="row">
            {links.map((link) => (
              <ListItem
                key={link.to}
                component={NavLink}
                to={link.to}
                sx={navStyles}
              >
                {link.title}
              </ListItem>
            ))}
          </Stack>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="large" edge="start" color="inherit">
            <Badge badgeContent={2} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
