import axios from 'axios';
const baseURL = 'https://61514f5bd0a7c100170169cc.mockapi.io';

export const listTodos = () => async dispatch => {
    dispatch({ type: 'LOADING' });
    try {
        const { data } =  await axios.get('https://61514f5bd0a7c100170169cc.mockapi.io/api/v1/todos');
        dispatch({ type: 'LIST_TODOS', data });
    } catch (error) {
        dispatch({ type: 'LOAD_ERROR', error });   
    }
}
export const createTodo = payload => async dispatch => {
    dispatch({ type: 'LOADING' });
    try {
        const { data } = await axios.post(`${baseURL}/api/v1/todos`, payload);
        
        dispatch({ type: 'CREATE_TODO', data });
    } catch (error) {
        dispatch({ type: 'LOAD_ERROR', error }); 
    }
}

export const toggleTodo = payload => async dispatch => {
    dispatch({ type: 'LOADING' });
    try {
        await axios.put(`${baseURL}/api/v1/todos/${ payload.id }`, { completed: !payload.completed });
        
        dispatch({ type: 'TOGGLE_TODO', data: payload.id });
    } catch (error) {
        dispatch({ type: 'LOAD_ERROR', error }); 
    }
}

export const deleteTodo = payload => async dispatch => {
    dispatch({ type: 'LOADING' });
    try {
        await axios.delete(`${baseURL}/api/v1/todos/${ payload }`);
        
        dispatch({ type: 'DELETE_TODO', data: payload });
    } catch (error) {
        dispatch({ type: 'LOAD_ERROR', error }); 
    }
}

export const updateTodo = payload => async dispatch => {
    dispatch({ type: 'LOADING' });
    try {
        await axios.put(`${baseURL}/api/v1/todos/${ payload.id }`, { text: payload.text, completed: payload.completed });
        
        dispatch({ type: 'UPDATE_TODO', data: payload});
    } catch (error) {
        dispatch({ type: 'LOAD_ERROR', error }); 
    }
}

export const onEditMode = payload => dispatch => {
    dispatch({ type: 'LOADING' });
    try {
        dispatch({ type: 'ON_EDIT_MODE', data: payload});
    } catch (error) {
        dispatch({ type: 'LOAD_ERROR', error }); 
    }
}

export const offEditMode = payload => async dispatch => {
    console.log(payload);
    dispatch({ type: 'LOADING' });
    try {
        if(payload.text && payload.prevText !== payload.text ){
            await axios.put(`${baseURL}/api/v1/todos/${ payload.id }`, { text: payload.text });
        }
        
        dispatch({ type: 'OFF_EDIT_MODE', data: payload});
    } catch (error) {
        dispatch({ type: 'LOAD_ERROR', error }); 
    }
}
