import { combineReducers } from 'redux'  //用于合并两个redux
import {ADD_TODO, COMPLETE_TODO, SET_VISIBITY_FILTER, VisibilityFilters } from '../actions'
const { SHOW_ALL } = VisibilityFilters

const completed = (state,id) => {
    state.map((item,index) => {
        if(id == item.id) {
            item.completed = true;
        }
    })
    return state
}

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case COMPLETE_TODO:
            return completed(state,action.id)
        default:
            return state
    }
}

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
      case SET_VISIBITY_FILTER: 
        return action.filter
      default:
        return state
    }
}
  

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp;
