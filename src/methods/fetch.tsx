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
<<<<<<< HEAD
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


  
=======
    .catch((error) => {
      throw error;  // Lança o erro para ser capturado no .catch()
    });
};
>>>>>>> 5c94c0aa844738b056405608ce2eee4a9daf1091
