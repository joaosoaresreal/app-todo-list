import { Theme } from "./theme/ThemeProvider"
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Badge, Button, colors, Grid, TextField, Toolbar, Typography, useTheme, Divider, Box, Chip } from "@mui/material";
import { Container } from "@mui/system";
import { PlusCircle, Rocket, ClipboardText } from "phosphor-react";
import { useEffect, useState } from "react";
import { Tarefas } from "./pages/tarefas/Index";
import { dados } from "./types";
import { save, getAll } from "./service/api";


function App() {
  const tema = useTheme()

  const [todos, setTodos] = useState<dados[]>([])
  const [novaTarefa, setNovaTarefa] = useState('')
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const [concluida, setConcluida] = useState(0)

  // Pegando o valor digitado pelo usuário
  const handleNew = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNovaTarefa(event.target.value);
  };
  
  // Salvando a nova tarefa
  const handleClick = async() => {
    const novoValor ={
      description:novaTarefa,
      done:false
    }
    const salvar:dados = await save(novoValor)// Método 'save' da api service
    setTodos((oldtodos:dados[])=> {return[...oldtodos, salvar]}) // faz aparecer a nova tarefa sem precisar renderizar novamente
  }

  useEffect(() => {
    async function listarTarefas() {
      setIsLoading(true)
      setTodos(await getAll())
      setIsLoading(false)
      
      // const total = await getAll()
      // setConcluida(() => {
      //   return 0
      // })
  
      // total.map((dados: dados) => {
      //   if (dados.done) {
      //     setConcluida((valor) =>{
      //       return valor +1
      //     })
      //   }
      // })
      // setNovaTarefa(total)

    }
    listarTarefas()
  }, [])





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
              top: "-27px",
              justifyContent: 'center'

            }}>
              <Grid item xl={7} sm={12} xs={7}>
                <TextField variant="outlined" name="task" value={novaTarefa} onChange={handleNew} fullWidth placeholder="Adicione uma nova tarefa" sx={{
                  background: colors.grey[800],
                }} />
              </Grid>
              <Grid item xl={2} sm={12} xs={3}>
                <Button variant="contained" fullWidth onClick={handleClick} sx={{
                  height: '100%'
                }}> <span>Criar</span> <PlusCircle size={32} /> </Button>
              </Grid>
            </Grid>

            <Grid container spacing={tema.spacing(1)}>

              <Grid item xl={12} sm={12} xs={12} sx={{
                position: 'relative',
                display: "flex",
                justifyContent: 'space-between',
              }}>
                <Box display='flex' alignItems='center' gap={tema.spacing(1)}>
                  <Typography variant="caption">
                    Tarefas Criadas
                  </Typography>
                  <Chip label={0} />
                </Box>
                <Box display='flex' alignItems='center' gap={tema.spacing(1)}>
                  <Typography variant="caption">
                    Concluídas
                  </Typography>
                  <Chip label={concluida} />
                </Box>

              </Grid>

              {/*flex */}
            </Grid>

            <Divider /> {/* Linha que faz a divisão*/}

            <Grid container spacing={tema.spacing(0)}>

              {/* <Tarefas /> */}

              {
                todos.map(dados => {
                  return <Tarefas key={dados.id} dadosTarefas={dados} />
                })
              }

              {/*               
              <Grid xl={12} sm={12} xs={12} sx={{
                position: 'relative',
                //display: "flow-root",
                alignItems: "center",
                textAlign: 'center',
                paddingTop: '10%'
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

              </Grid> */}

            </Grid>

          </Container>
        </main>

      </Theme>
    </>
  )
}

export default App
