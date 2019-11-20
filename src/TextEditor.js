import React from 'react';
import { dragElement, removeDrag } from './dragElement.js';
import './Text.css';

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
    if (this.props.windowSplit === "window") {
      return (
        <div id="editor-container" className="container editor-container-window">
          <div id="editor-header" className="header"></div>
          <textarea id="editor" value={this.props.input} onChange={this.props.updateText} className="editor"></textarea>
        </div>
      );
    } else if (this.props.windowSplit === "horiz") {
      return (
        <div id="editor-container" className="container editor-container-horiz">
          <div id="editor-header" className="header"></div>
          <textarea id="editor" value={this.props.input} onChange={this.props.updateText} className="editor-horiz"></textarea>
        </div>
      );
    } else {
      return (
        <div id="editor-container" className="container editor-container-vert">
          <div id="editor-header" className="header"></div>
          <textarea id="editor" value={this.props.input} onChange={this.props.updateText} className="editor-vert"></textarea>
        </div>
      );
    }
  }
}

export default TextEditor;