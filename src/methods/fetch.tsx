import { ApiModel } from "../Interface/Model";

const token = sessionStorage.getItem('token'); 
console.log(token)

export const fetchData = (id: string): Promise<ApiModel[]> => {
  if (!token) {
    return Promise.reject(new Error("Token não encontrado. O usuário pode não estar autenticado."));
  }

  return fetch(`https://api-todolist-eqx8.onrender.com/userItens/${id}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Erro ao buscar atividades');
    }
    return response.json();  
  })
  .catch((error) => {
    throw error; 
  });
};