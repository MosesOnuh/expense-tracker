import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const {className, type} = this.props;
    return (
        <button
        className={className}
        type={ type || "button"}
        >
            {this.props.children}
        </button>
    )
  }
}
