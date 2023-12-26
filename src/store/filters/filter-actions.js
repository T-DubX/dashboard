export const ADD_FILTER = 'ADD_FILER'
export const REMOVE_FILTER = 'ADD_REMOVE'
export const CLEAR_FILTER = 'ADD_CLEAR'


export const addFilter = (filter) => ({
    type: ADD_FILTER,
    filter
})

export const removeFilter = (filter) => ({
    type: REMOVE_FILTER,
    filter
})

export const clearFilter = {
    type: CLEAR_FILTER
}