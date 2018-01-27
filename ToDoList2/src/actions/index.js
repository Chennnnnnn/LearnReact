
let nextTodoId = 1;
// 定义action类型
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBITY_FILTER = 'SET_VISIBITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  };

// 添加todo
export const addTodo = (text) => ({
    type:ADD_TODO,
    id: nextTodoId++,
    text
})

// 完成，改变状态
export const completeTodo = (id) => ({
    type: COMPLETE_TODO,
    id
})

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBITY_FILTER,
    filter
})

