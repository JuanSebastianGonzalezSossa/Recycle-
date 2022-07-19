import { useDispatch, useSelector } from 'react-redux';
import { onOpenSalonModal, onCloseSalonModal, onOpenEditModal, onCloseEditModal, onOpenDeleteModal, onCloseDeleteModal } from '../store/ui/uiSlice';


export const useUiStore = () => {

    const dispatch = useDispatch();

    const { 
        isSalonModalOpen
    } = useSelector( state => state.ui );

    const openSalonModal = () => {
        dispatch( onOpenSalonModal() )
    }

    const closeSalonModal = () => {
        dispatch( onCloseSalonModal() )
    }

    const { 
        isEditModalOpen
    } = useSelector( state => state.ui );

    const openEditModal = () => {
        dispatch( onOpenEditModal() )
    }

    const closeEditModal = () => {
        dispatch( onCloseEditModal() )
    }

    const { 
        isDeleteModalOpen
    } = useSelector( state => state.ui );

    const openDeleteModal = () => {
        dispatch( onOpenDeleteModal() )
    }

    const closeDeleteModal = () => {
        dispatch( onCloseDeleteModal() )
    }




    return {
        //* Propiedades
        isSalonModalOpen,
        isEditModalOpen,
        isDeleteModalOpen,

        //* Métodos
        openSalonModal,
        closeSalonModal,
        openEditModal,
        closeEditModal,
        openDeleteModal,
        closeDeleteModal,
    }

}