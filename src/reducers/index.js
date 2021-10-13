import { combineReducers } from 'redux'

const initialState = {
    todos: [],
    loading: false,
    error: ''
};

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOADING': 
            return {
                ...state,
                loading: true,
            };
        case 'LOAD_ERROR': 
            return {
                ...state,
                loading: false,
            };
        case 'LIST_TODOS':
            return {
                ...state,
                todos: action.data,
                loading: false,
            };
        case 'CREATE_TODO':
            return {
                ...state,
                todos: [...state.todos, action.data],
                loading: false,
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: [...state.todos.filter(todo => todo.id !== action.data)],
                loading: false,
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: [...state.todos.map( todo => todo.id === action.data ? { ...todo, completed: !todo.completed } : todo )], 
                loading: false,
            };
        case 'UPDATE_TODO':
            return {
                ...state,
                todos: [...state.todos.map( todo => todo.id === action.id ? { ...action } : todo )], 
                loading: false,
            };
        case 'ON_EDIT_MODE':
            return {
                ...state,
                todos: [...state.todos.map( todo => todo.id === action.data.id ? {...todo, bordered: true, prevText: action.data.text } : todo )], 
                loading: false,
            };
        case 'OFF_EDIT_MODE':
            return {
                ...state,
                todos: [...state.todos.map( todo => todo.id === action.data.id ? {...todo, bordered: false, text: action.data.text } : todo )], 
                loading: false,
            };
        default: 
            return state;
    }    
}

export default combineReducers({
    todoApp: todosReducer,
});
