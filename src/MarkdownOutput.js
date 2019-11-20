import React from 'react';
import marked from 'marked';
import { dragElement, removeDrag } from './dragElement.js'
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
    //Make the element draggable to start
    dragElement(document.getElementById("output-header"), document.getElementById("output-container"));
  }
  componentDidUpdate() {
    //Add or remove draggability
    if (this.props.windowSplit === "window") {
      dragElement(document.getElementById("output-header"), document.getElementById("output-container"));
    } else {
      removeDrag(document.getElementById("output-header"), document.getElementById("output-container"));
    };
  }
  render() {
    if (this.props.windowSplit === "window") {
      return (
        <div id="output-container" className="container output-container-window">
          <div id="output-header" className="header"></div>
          <div id="output" className="output-window">
            <p dangerouslySetInnerHTML={this.markdownText()}></p>
          </div>
        </div>
      )
    } else if (this.props.windowSplit === "horiz") {
      return (
        <div id="output-container" className="container output-container-horiz">
          <div id="output-header" className="header"></div>
          <div id="output" className="output-horiz">
            <p dangerouslySetInnerHTML={this.markdownText()}></p>
          </div>
        </div>
      )
    } else {
      return (
        <div id="output-container" className="container output-container-vert">
          <div id="output-header" className="header"></div>
          <div id="output" className="output-vert">
           <p dangerouslySetInnerHTML={this.markdownText()}></p>
          </div>
        </div>
      )
    }
  }
}

export default MarkdownOutput;