import React from 'react';
import {Route,Link,HashRouter,Switch} from 'react-router-dom';
import Todolist from '../container/todolist'
import Details from '../container/details'


const App = (props) => (
    <div>
      <HashRouter>
      <div>
          <h2>ToDoList</h2>
          <Route path="/" exact component={Todolist} {...props}></Route>
          <Route path="/:id" component={Details} {...props}></Route>
      </div>
      </HashRouter>
    </div>
)


export default App;