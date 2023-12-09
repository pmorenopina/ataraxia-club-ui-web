import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: [
      'Saira Extra Condensed',
      'Roboto',
      'Helvetica Neue',
      'Helvetica',
      'sans-serif',
    ].join(),
  },
})

export default theme
