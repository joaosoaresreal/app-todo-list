import { Button } from "@mui/base";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from "react";

type AlertDialogProps ={
    open:void
}

export function AlertDialog({open}:AlertDialogProps){
    const [isOpen, setIsOpen] = useState(true)

    return(
        <>
            <Dialog open={open}>
                <DialogTitle>Confirmar Exclusão</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Deseja realmente excluir a tarefa?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button>SIM</Button>
                    <Button onClick={()=>setIsOpen(false)}>NÃO</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}