import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isSalonModalOpen: false,
        isEditModalOpen: false,
        isDeleteModalOpen: false,
    },
    reducers: {
        onOpenSalonModal: ( state ) => {
            state.isSalonModalOpen = true;
        },
        onCloseSalonModal: ( state ) => {
            state.isSalonModalOpen = false;
        },
        onOpenEditModal: ( state ) => {
            state.isEditModalOpen = true;
        },
        onCloseEditModal: ( state ) => {
            state.isEditModalOpen = false;
        },
        onOpenDeleteModal: ( state ) => {
            state.isDeleteModalOpen = true;
        },
        onCloseDeleteModal: ( state ) => {
            state.isDeleteModalOpen = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { onOpenSalonModal, onCloseSalonModal, onOpenEditModal, onCloseEditModal, onOpenDeleteModal, onCloseDeleteModal } = uiSlice.actions;