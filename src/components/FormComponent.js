import React, { Component } from 'react'

class FormComponent extends Component {
  handlerSubmit (e) {
    e.preventDefault()
    const user = this.refs.user.value
    const say = this.refs.say.value
    this.props.onCommentSubmit(user, say)
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handlerSubmit.bind(this)}>
          用户名 <input type="text" ref="user"/>
          <br/>
          <textarea cols="30" rows="10" ref="say"></textarea>
          <br/>
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default FormComponent