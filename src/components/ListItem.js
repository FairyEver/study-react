import React, { Component } from 'react'

class ListItem extends Component {
  render () {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default ListItem
