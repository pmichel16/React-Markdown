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
    //Update class
    var containerClass = classNames(
      "container",
      { "output-container-window": this.props.windowSplit === "window" },
      { "output-container-horiz": this.props.windowSplit === "horiz" },
      { "output-container-vert": this.props.windowSplit === "vert" }
    );
    return (
      <div id="output-container" className={containerClass}>
        <div id="output-header" className="header"></div>
        <div id="output">
          <p dangerouslySetInnerHTML={this.markdownText()}></p>
        </div>
      </div>
    );
  }
}

export default MarkdownOutput;