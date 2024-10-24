import { ApiModel } from "../Interface/Model";

export const fetchData = (id: string): Promise<ApiModel[]> => {
  return fetch(`https://api-todolist-eqx8.onrender.com/userItens/${id}`, {
    method: 'GET',
    mode: 'cors',
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

