import { ThemeProvider, createTheme } from '@mui/material/styles'; // PROVEDOR DO TEMA E FUNÇÃO QUE CRIA O TEMA

type ThemeProps = {
    children:React.ReactNode
}

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function Theme({children}:ThemeProps) {
  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>;
}