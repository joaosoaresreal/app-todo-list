import axios from 'axios'
import { dados } from '../types';

// Api que conecta com o banco usando 'axios'
const api = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 1000 // tempo de atraso na resposta
});

// Listar todos os registro do banco
export async function getAll() {
    const todos = await api.get('todos')
    return todos.data
}

// Listar registro unico do banco
export async function getById(id:number) {
    const todos = await api.get(`todos/${id}`)
    return todos.data
}

// Salvar registro no banco
export async function save(todos:dados) {
    const response = await api.post(`todos`,{
        ...todos
    })
    return response.data
}

// Atualizar registro do banco
export async function update(todos:dados) {
    const response = await api.put(`todos/${todos.id}`,{
        ...todos
        /*
            É A MESMA COISA QUE FAZER ISSO:
            
            description:todos.description,
            done:todos.done
        */
    })
    return response.data
}

// Exluir registro do banco
export async function exclude(id:number) {
    const todos = await api.delete(`todos/${id}`)
    return todos.data
}
