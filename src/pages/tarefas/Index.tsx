import { colors, Checkbox, Grid, ListItem, ListItemText, Button } from "@mui/material";
import { Trash } from "phosphor-react";
import { dados } from "../../types";

type TarefasProps = {
    dadosTarefas:dados
}

export function Tarefas({ dadosTarefas: dados }: TarefasProps) {
    const {description, done} = dados
    return (
        <>
            <Grid xl={12} sm={12} xs={12} sx={{
                position: 'relative',
                //display: "flow-root",
                alignItems: "center",
                textAlign: 'center',
                paddingTop: '10%'
            }}>

                <ListItem sx={{
                    backgroundColor: colors.grey[900]
                }}>
                    <Checkbox checked={done} />
                    <ListItemText primary={description} />
                    <Trash size={22} weight="bold"  />
                </ListItem>

            </Grid>

        </>
    )
}