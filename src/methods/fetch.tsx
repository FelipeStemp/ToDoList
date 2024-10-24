import { ApiModel } from "../Interface/Model";

export const fetchData = (): Promise<ApiModel[]> => {
  return fetch('https://api-todolist-eqx8.onrender.com', {
    method: 'GET',
    mode: 'cors',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao buscar atividades');
      }
      return response.json();  // Retorna os dados
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar atividades');
        }
        return response.json();  // Retorna os dados
      })
      .catch((error) => {
        throw error;  // Lança o erro para ser capturado no .catch()
      });
  };

