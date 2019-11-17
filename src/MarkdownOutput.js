import React from 'react';
import marked from 'marked';
import { dragElement } from './dragElement.js'
import './Text.css';
import classNames from 'classnames'; 

class MarkdownOutput extends React.Component {
  constructor(props) {
    super(props);
    this.markdownText = this.markdownText.bind(this);
  }

  markdownText() {
    const markedText = marked(this.props.text);
    return { __html: markedText };
  }

  componentDidMount() {
    //Make the element draggable if it is in window form
    if (this.props.window) {
      dragElement(document.getElementById("output-header"), document.getElementById("output-container"));
    }
  }
  render() {
    var splitClass = classNames({
      'split-horiz-output': this.props.splitH,
      'split-vert-output': this.props.splitV
    });
    return (
      <div id="output-container" className={"container output-container " + splitClass}>
        <div id="output-header" className="header"></div>
        <div className={"output " + splitClass}>
          <p dangerouslySetInnerHTML={this.markdownText()}></p>
        </div>
      </div>
    )
  }
}

export default MarkdownOutput;