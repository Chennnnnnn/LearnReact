import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

let details = ({match,todos}) => {
    const id = match.params.id;
    const text = todos.filter(todo => todo.id==id)
    return (
        <div>
            <Link to="/">返回首页</Link>
            <div>细节： {text[0].text}</div>
            <div>状态：{text[0].completed? "完成":"未完成"}</div>
        </div>
    )
}
    
const select = (state) => (state);


details = connect(select)(details);

export default details;
