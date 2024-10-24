import { Button, CircularProgress } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { ApiModel } from "../../Interface/Model";
import { useState } from "react";
import { IUser } from "../../Interface/UserModel";

interface props {
  id?: string,
  action?: string,
  children?: React.ReactNode,
  data?: ApiModel,
  colorS?: 'primary' | 'error' | 'success';
  variant?: 'contained' | 'outlined';
  desabilitar?: boolean,
  onSuccess?: (message: string) => void;
  onError?: (message: string) => void;
  click?: () => void;
}
function ButtonContainer({ id = '', action = '', children = '', data, colorS, variant, desabilitar, onError, onSuccess, click }: props) {
  const [loading, setLoading] = useState(false)

  const userData = localStorage.getItem('userData');
  const user = userData ? JSON.parse(userData) : null;

  const handleCriar = (dataCriar: ApiModel) => {

    if (!dataCriar.description?.trim() || !dataCriar.name?.trim()) {
      if (onError) onError('Insira os dados')
      return;

    } else {
      setLoading(true)
      fetch("https://api-to-do-list-lu3m.onrender.com/createitem", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user._id,
          name: dataCriar.name,
          description: dataCriar.description,
        }),
      }).then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao Criar")
        }
        setLoading(false)
        return response.json();
      }).then(data => {
        if (onSuccess) onSuccess('');
      }).catch(error => {
        console.log('Error: ', error);
        if (onError) onError('');
        setLoading(false)
      });

    }
  }

  const handleAtualizar = (dataAtt: ApiModel) => {

    if (!dataAtt.description?.trim() || !dataAtt.name?.trim()) {
      if (onError) onError('')
      return;

    } else {
      setLoading(true)
      fetch(`https://api-to-do-list-lu3m.onrender.com/updateByID/${dataAtt._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          completed: dataAtt.completed,
          name: dataAtt.name,
          description: dataAtt.description,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao atualizar");
          }
          setLoading(false)
          return response.json();
        })
        .then(data => {
          console.log('Atualização bem-sucedida', data);
          if (onSuccess) onSuccess('');
          setLoading(false)
        })
        .catch(error => {
          console.log('Error: ', error);
          if (onError) onError('');
          setLoading(false)
        });
    }
  };

  const handleDeleter = (id_coleted: string) => {
    setLoading(true)
    fetch('https://api-to-do-list-lu3m.onrender.com/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id_coleted,
      })
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao deletar")
      }
      if (onSuccess) onSuccess('');
      setLoading(false)

      return response.status;
    })
      .catch(error => {
        console.log('Error:', error)
        if (onError) onError('');
        setLoading(false)
      })
  }




  const handleAction = (action: string) => {
    switch (action) {
      case "delete":
        handleDeleter(id);
        break;
      case "criar":
        if (data) {
          handleCriar(data);
        } else {
          console.error("Data is undefined, cannot update.");
        }
        break;
      case "Edit":
        if (data) {
          handleAtualizar(data);
        } else {
          console.error("Data is undefined, cannot update.");
        }
        break;
    }
  }


  return (
    <Button sx={{ margin: "10px" }}
      size="small"
      variant={variant}
      color={colorS}
      fullWidth
      disabled={desabilitar}
      onClick={click}
      onClickCapture={() => handleAction(action)}
    >
      {loading ? <CircularProgress color="inherit" size={24}/> : children}
    </Button>
  )
}

export default ButtonContainer