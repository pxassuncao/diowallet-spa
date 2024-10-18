import axios from 'axios';

const BaseUrl = 'http://localhost:3001';

export async function cadastro(data){
    try{
        delete data.confirmePassword;
        const response = await axios.post(`${BaseUrl}/cadastro`, data);
        return response.data;
    }catch(error){
        console.error('Erro na requisição:', error);
        throw error;
    }
}