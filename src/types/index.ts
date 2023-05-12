export type Todos = {
    id?: number, // '?' faz com que seja ignorado o id na hora de criar
    description: string,
    done: boolean    
}