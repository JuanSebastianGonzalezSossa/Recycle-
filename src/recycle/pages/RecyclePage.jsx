import { AddOutlined } from '@mui/icons-material';
import { RecycleLayout } from '../layout/RecycleLayout';
import { NothingSelectedView } from '../views/NothingSelectedView';
import { IconButton } from '@mui/material';
import { ModalRegistrarSalon } from '../views/ModalRegistrarSalon';
import { useUiStore } from '../../hooks/UseUIStore';

export const RecyclePage = () => {

  const { openDateModal } = useUiStore();

  const onOpenModal = () => {
    console.log('Abriendo modal');
    openDateModal();
  }

  return (
    <RecycleLayout>

      <NothingSelectedView />

      <IconButton
        size='large'
        sx={{
          color: 'purple',
          backgroundColor: 'white',
          ':hover': { backgroundColor: 'white', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
        onClick={onOpenModal}
      >
        <AddOutlined sx={{ fontSize: 30 }} />

      </IconButton>

      <ModalRegistrarSalon/>

    </RecycleLayout>
  )

}
