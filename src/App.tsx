import { Theme } from "./theme/ThemeProvider"
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Badge, Button, colors, Grid, TextField, Toolbar, Typography, useTheme, Divider } from "@mui/material";
import { Container } from "@mui/system";
import { PlusCircle, Rocket, ClipboardText } from "phosphor-react";


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
            <Typography variant="h5" component="h1" sx={{
              display: "flex",
              alignItems: "center",
              gap: tema.spacing(2),
              color: tema.palette.primary.light
            }}>
              <Rocket size={32} />Lista de Tarefas
            </Typography>
          </Toolbar>
        </AppBar>

        <main>
          <Container sx={{
            position: "relative",
            paddingTop: "50px"
          }}>
            <Grid container spacing={tema.spacing(0.5) /*spacing é o gap do css*/} sx={{
              position: "absolute",
              top: "-27px"
            }}>
              <Grid item xl={10} sm={12} xs={8}>
                <TextField variant="outlined" name="task" fullWidth placeholder="Adicione uma nova tarefa" sx={{
                  background: colors.grey[800],
                }} />
              </Grid>
              <Grid item xl={2} sm={12} xs={3}>
                <Button variant="contained" fullWidth sx={{
                  height: '100%'
                }}> <span>Criar</span> <PlusCircle size={32} /> </Button>
              </Grid>
            </Grid>

            <Grid container spacing={tema.spacing(4)}>

              <Grid item sx={{
                display: "flex"
              }}>
                <Typography variant="caption" sx={{
                  //display: "flex",
                  alignItems: "center",
                  gap: tema.spacing(0)
                }}>
                  <Badge color="primary" badgeContent={0} showZero>Tarefas Criadas</Badge>
                </Typography>

                <Typography variant="caption" sx={{
                  //display: "flex",
                  alignItems: "center",
                  gap: tema.spacing(1)
                }}>
                  <Badge color="primary" badgeContent={0} showZero>Concluídas</Badge>
                </Typography>

              </Grid>

              {/*flex */}
            </Grid>

            <Divider /> {/* Linha que faz a divisão*/}

            <Grid container spacing={tema.spacing(0)}>
              <Grid xl={12} xs={12} sx={{
                //display: "flex",
                alignItems: "center",
                textAlign: 'center'
              }}>

                <ClipboardText size={56} color={colors.grey[700]} weight="light" />

                <Typography variant='h6' sx={{
                  color: colors.grey[600],
                  fontWeight: 'bold',
                }}>
                  Você ainda não tem tarefas cadastradas
                </Typography>

                <Typography variant='h6' sx={{
                  color: colors.grey[800],
                }}>
                  Crie tarefas e organize seus itens a fazer
                </Typography>

              </Grid>
            </Grid>

          </Container>
        </main>

      </Theme>
    </>
  )
}

export default App
