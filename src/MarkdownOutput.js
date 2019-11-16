import React from 'react';
import marked from 'marked';
import { dragElement } from './dragElement.js'
import './Text.css';

class MarkdownOutput extends React.Component {
  constructor(props) {
    super(props);
    this.markdownText = this.markdownText.bind(this);
  }
  markdownText() {
    const markedText = marked(this.props.text, { sanitize: true });
    return { __html: markedText };
  }
  componentDidMount() {
    dragElement(document.getElementById("output-header"), document.getElementById("output-container"));
  }
  render() {
    return (
      <div id="output-container" className="container">
        <div id="output-header" className="header"></div>
        <p>Input text:</p>
        <p dangerouslySetInnerHTML={this.markdownText()}></p>
      </div>
    )
  }
}

export default MarkdownOutput;