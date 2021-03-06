import streams from '../apis/streams';
import history from '../history';

import {SING_IN,
    SING_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM } from './type'
/*export const signIn = () => {
    return {
        type:'SIGN_IN'
    }
}*/
export const signIn = userId => {
    return {
        type:SING_IN,
        payload:userId
    }
}
export const signOut = () => {
    return {
        type:SING_OUT
    }
}

export const createStream = formValues => async (dispatch, getState) =>{
   const userId = getState().auth.userId;

  const response =  await streams.post ('/streams',  {...formValues.formValues, userId});
  console.log(response )
 dispatch({ type : CREATE_STREAM, payload : response.data})
 //Do some programmatic navigation to
 // get the user back to the root route
 history.push('/');
}

export const fetchStreams = ()=> async dispatch =>{
    const response = await streams.get('streams');
    dispatch({
        type: FETCH_STREAMS,
        payload : response.data
    })
};


export const fetchStream = id => async dispatch =>{
    const response = await streams.get(`/streams/${id}`);
    dispatch({
        type:FETCH_STREAM,
        payload: response.data
    })
}

/*export const editStream = (id, formValues) => async dispatch =>{
    const response = await streams.put(`/streams/${id}`, formValues);
    dispatch({
        type:EDIT_STREAM,
        payload: response.data
    })
    history.push('/');
}*/
//TO UPDATE JUST SOME VALUES
export const editStream = (id, formValues) => async dispatch =>{
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({
        type:EDIT_STREAM,
        payload: response.data
    })
    history.push('/');
}
export const deleteStream = id => async dispatch =>{
    await streams.delete(`/streams/${id}`);
    dispatch({
        type:DELETE_STREAM,
        payload: id
    })

    history.push('/');
}