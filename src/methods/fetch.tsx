import { ApiModel } from "../Interface/Model";

export const fetchData = (id: string): Promise<ApiModel[]> => {
  const token = sessionStorage.getItem('token');

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
      throw new Error('Erro ao buscar atividades: ' + response.statusText); 
    }
    return response.json();  
  })
  .catch((error) => {
    console.error('Erro na requisição:', error); 
    throw error; 
  });
};
