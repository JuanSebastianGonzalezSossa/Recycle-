import { setSalones, startLoadingSalones } from './salonSlice';

export const getSalones = ( ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingSalones() );

        // TODO: realizar petición http
        const resp = await fetch(`localhost:80/salon/list`);
        const data = await resp.json();

        dispatch( setSalones({ salones: data }) );
    }
}
