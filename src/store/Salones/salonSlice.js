import { createSlice } from '@reduxjs/toolkit';

export const salonSlice = createSlice({
    name: 'salon',
    initialState: {
        salones: {},
        isLoading: false,
    },
    reducers: {
        startLoadingSalones: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setSalones: ( state, action ) => {
            state.isLoading = false;
            state.salones = action.payload.salones;
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingSalones, setSalones } = salonSlice.actions;