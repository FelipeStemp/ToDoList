import { useEffect, useState } from 'react';
import { ApiModel } from '../../Interface/Model';
import TableList from '../../components/Table/Table';
import * as S from './styled';
import { Box, ButtonGroup, CircularProgress } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CardList from '../../components/Modal/cardTarefas/Card';
import ListaTarefas from '../../components/LIstaCards/Lista';
import TableRowsIcon from '@mui/icons-material/TableRows';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import { fetchData } from '../../methods/fetch';
import Header from '../../components/HeaderDiv/header';
import CelPage from '../celularPage/celular';

function Home() {
  const [data, setData] = useState<ApiModel[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true)
  const [isModalOpenCriar, setIsModalOpenCriar] = useState(false);
  const [showComponent, setShowComponente] = useState(() => {
    const valueSelected = localStorage.getItem('showComponent');
    return valueSelected === 'true'
  })
  const [firstAcess, setFirst] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const userData = localStorage.getItem('userData');
  const user = userData ? JSON.parse(userData) : null;

  const handleOpenModalCriar = () => setIsModalOpenCriar(true);
  const handleCloseModalCriar = () => { setIsModalOpenCriar(false) }
  const toggleComponent = (mostrar: boolean) => setShowComponente(mostrar);

  useEffect(() => {
    localStorage.setItem('showComponent', showComponent.toString());
  }, [showComponent])

  useEffect(() => {
    setLoading(true)
    fetchData(user._id)
      .then((data: ApiModel[]) =>
        setData(data))
      .catch((error: string) =>
        console.log(error));
    setFirst(false);
    setLoading(false)
  })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  })

  

  if (loading) {
    return (
      <S.HomeBody>
        <Header>
          <ButtonGroup variant="contained" aria-label="Basic button group" sx={{ gap: '10px', display: 'flex', alignItems: 'center', padding: '5px' }}>
            <AddIcon sx={{ color: "white" }} fontSize="large" onClick={handleOpenModalCriar} />
            <TableRowsIcon sx={{ color: "white" }} fontSize="large" onClick={() => toggleComponent(false)} />
            <ViewColumnIcon sx={{ color: "white" }} fontSize="large" onClick={() => toggleComponent(true)} />
          </ButtonGroup>

          <CardList
            ativo={true}
            open={isModalOpenCriar}
            handleClose={handleCloseModalCriar}
          />
        </Header>
        <Box style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2F333F' }}>
          <CircularProgress />
        </Box>
      </S.HomeBody>

    )
  }
  return (
    <S.HomeBody>

      <Header justify='center'>
        <ButtonGroup className="buttonGroup" variant="contained" aria-label="Basic button group" sx={{  display: 'flex', alignItems: 'center', width:'200px', border: 'none', boxShadow:'none', position: 'absolute', right:'10px' }}>
          <AddIcon sx={{ color: "white", width:'33%' }} fontSize="large" onClick={handleOpenModalCriar}/>
          {!isMobile && <TableRowsIcon sx={{ color: "white", width:'33%' }} fontSize="large" onClick={() => toggleComponent(false)} />}
          {!isMobile && <ViewColumnIcon sx={{ color: "white", width:'33%' }} fontSize="large" onClick={() => toggleComponent(true)} />}
        </ButtonGroup>

        <CardList
          ativo={true}
          open={isModalOpenCriar}
          handleClose={handleCloseModalCriar}
        />
      </Header>

      {!isMobile && (showComponent ? <ListaTarefas data={data} /> : <TableList data={data}></TableList>)} 

      {isMobile && <CelPage data={data}/>} 

    </S.HomeBody>

  )
}

export default Home