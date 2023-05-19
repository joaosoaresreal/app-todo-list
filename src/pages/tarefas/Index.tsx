import { colors, Checkbox, Grid, ListItem, ListItemText } from "@mui/material";
import { Trash } from "phosphor-react";
import { useState } from "react";
import { exclude, update } from "../../service/api";
import { dados } from "../../types";

type TarefasProps = {
    dadosTarefas:dados
}

export function Tarefas({ dadosTarefas: dados }: TarefasProps) {
    const {description, done} = dados
    //const {alterar, setAlterar} = useState()

    const excluir = () =>{
        exclude(dados.id)
    }

    const concluir = () =>{
        update()
    }

    return (
        <>
            <Grid xl={12} sm={12} xs={12} sx={{
                position: 'relative',
                //display: "flow-root",
                alignItems: "center",
                textAlign: 'center',
                paddingTop: '2%'
            }}>

                <ListItem sx={{
                    backgroundColor: colors.grey[900]
                }}>
                    <Checkbox checked={done} />
                    <ListItemText primary={description} />
                    <Trash size={22} weight="bold" onClick={excluir}/>
                </ListItem>

            </Grid>

        </>
    )
}