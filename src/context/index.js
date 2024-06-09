import { createContext, useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialValue = {
    data: [],
    filter: 'All',
}

export const Context = createContext();

const reducer = (state = initialValue, action) => {
    const { type, payload } = action
    switch (type) {
        case 'GET_DATA':
            return { ...state, data: payload }
        case 'ON_DELETE':
            const deleteArr = state.data.filter(c => c.id !== payload);
            return { ...state, data: deleteArr }
        case 'ON_ADD_FORM':
            const { name } = payload
            const newItem = { name: name, completed: false, id: uuidv4() };
            return { ...state, data: [...state.data, newItem] }
        case 'ON_FILTER':
            return { ...state, filter: payload }
        case 'ON_COMPLETE':
            const toggleArr = state.data.map(item => {
                if (item.id === payload) {
                    return { ...item, completed: !item.completed }
                }
                return item
            })
            return { ...state, data: toggleArr }
        case 'ON_CLEAR_COMPLETED':
            const newArr = state.data.filter(c => !c.completed)
            return { ...state, data: newArr }
        case 'ON_EDIT':
            const editArr = state.data.map(item => {
                if (item.id === payload.id) {
                    return { ...item, name: payload.name };
                }
                return item;
            });
            return { ...state, data: editArr };
        default:
            return { state }
    }
}

const Provider = ({ children }) => {
    const savedData = JSON.parse(localStorage.getItem('todoList'));
    const initialState = savedData || initialValue;
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(state));
    }, [state]);

    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

export default Provider