import React from 'react'
import marked from 'marked'

import Display from './Display'

export default class TextArea extends React.Component {
  getText(e) {
    e.preventDefault()
    document.getElementById('markedText').innerHTML = marked(e.target.value)
  }

  render() {
    return (
      <div class="container">
        <textarea onChange={this.getText.bind(this)} rows="20" cols="80" />
        <Display />
      </div>
    )
  }
}
