import { AddOutlined } from '@mui/icons-material';
import { RecycleLayout } from '../layout/RecycleLayout';
import { NothingSelectedView } from '../views/NothingSelectedView';
import { IconButton } from '@mui/material';
import { ModalRegistrarSalon } from '../views/ModalRegistrarSalon';
import { useUiStore } from '../../hooks/UseUIStore';
import { useFetch } from '../../hooks/UseFetch';
import { SalonesGrid } from '../views/SalonesGrid';

export const RecyclePage = () => {

  const { data, isLoading, hasError } = useFetch('http://localhost:80/salon/list');

  console.log({ data, isLoading, hasError })

  const { openSalonModal } = useUiStore();

  const onOpenModal = () => {
    console.log('Abriendo modal');
    openSalonModal();
  }

  // const peticionGet = async () => {
  //   await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }

  // useEffect(() => {
  //   peticionGet();
  // }, [])

  return (
    <RecycleLayout>

      {data ? <SalonesGrid data={data}/>
      : <NothingSelectedView /> }

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'purple',
          ':hover': { backgroundColor: 'purple', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
        onClick={onOpenModal}
      >
        <AddOutlined sx={{ fontSize: 30 }} />

      </IconButton>

      <ModalRegistrarSalon />

    </RecycleLayout >
  )

}
