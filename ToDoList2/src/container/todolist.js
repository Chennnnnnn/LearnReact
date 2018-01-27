import React from 'react';
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions'
import List from '../components/List'
import Footer from '../components/Footer'


class todolist extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e,dispatch) {
    const node = this.refs.input;
    const text = node.value;
    dispatch(addTodo(text));
    node.value = '';
  }
  render() {
    const { dispatch, visibleTodos, visibilityFilter } = this.props;
    return (
      <div>
      <input ref='input'/>
      <button onClick={(e)=>this.handleClick(e,dispatch)} className='add'>添加</button>
      <List 
        todos={visibleTodos}
        onTodoClick={id =>
        dispatch(completeTodo(id))
       } />
      <Footer
        filter={visibilityFilter}
        onFilterChange={nextFilter =>
        dispatch(setVisibilityFilter(nextFilter))
        } />
      </div>
    )
  }
}


function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}


const select = (state) => ({
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
})

todolist = connect(select)(todolist);

export default todolist;