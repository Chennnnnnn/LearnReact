import React, { Component} from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

export default class TodoList extends Component {
  render() {


    return (
      <ul>
        {this.props.todos.map((todo, index) =>
          <li todoid={todo.id} key={index}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: todo.completed ? 'default' : 'pointer'
              }}> 
              {todo.text}  
              <Link to={`./${todo.id}`} > 详情 </Link>  
              <button  onClick={() => this.props.onTodoClick(todo.id)}> 完成 </button>
          </li>
        )}
      </ul>
    )
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}









