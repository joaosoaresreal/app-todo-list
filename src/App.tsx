import { Theme } from "./theme/ThemeProvider"
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Button, Grid, TextField, Toolbar, Typography, useTheme } from "@mui/material";
import { Container } from "@mui/system";

function App() {
  const tema = useTheme()
  return (
    <>
      <Theme>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar sx={{
            paddingTop: tema.spacing(2),
            paddingBottom: tema.spacing(2),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            '@media all': {
              minHeight: "200px"
            }
          }}>
            <Typography variant="h5" component="h1">aaaa</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Container>
            <Grid container spacing={tema.spacing(0.5) /*spacing é o gap do css*/}>
              <Grid item xl={8} sm={12}>
                <TextField name="task" fullWidth/>
              </Grid>
              <Grid item xl={4} sm={12}>
                <Button variant="contained" fullWidth>Criar</Button>
              </Grid>
            </Grid>
          </Container>
        </main>
      </Theme>
    </>
  )
}

export default App
