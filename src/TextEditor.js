import React from 'react';
import { dragElement, removeDrag } from './dragElement.js';
import './Text.css';
import classNames from 'classnames';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //Make the editor draggable if it is in window form.
    if (this.props.windowSplit==="window") {
      dragElement(document.getElementById("editor-header"), document.getElementById("editor-container"));
    }
  }
  componentDidUpdate() {
    //Add or remove draggability
    if (this.props.windowSplit === "window") {
      dragElement(document.getElementById("editor-header"), document.getElementById("editor-container"));
    } else {
      removeDrag(document.getElementById("editor-header"), document.getElementById("editor-container"));
    };
  }
 
  render() {
    //Update class
    var containerClass = classNames(
      "container",
      { "editor-container-window": this.props.windowSplit === "window" },
      { "editor-container-horiz": this.props.windowSplit === "horiz" },
      { "editor-container-vert": this.props.windowSplit === "vert" }
    );
      return (
        <div id="editor-container" className={containerClass}>
          <div id="editor-header" className="header"></div>
          <textarea id="editor" value={this.props.input} onChange={this.props.updateText}></textarea>
        </div>
      );
  }
}

export default TextEditor;