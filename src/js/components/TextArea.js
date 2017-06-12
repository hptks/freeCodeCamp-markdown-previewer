import React from 'react'
import marked from 'marked'

export default class TextArea extends React.Component {
  getText(e) {
    const text = e.target.value
    document.getElementById('markdown').innerHTML = marked(text)
  }

  render() {
    return (
      <textarea onChange={this.getText.bind(this)} rows="10" cols="40" />
    )
  }
}
