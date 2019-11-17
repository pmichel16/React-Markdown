import React from 'react';
import { dragElement } from './dragElement.js';
import './Text.css';
import classNames from 'classnames';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //Make the editor draggable if it is in window form.
    if (this.props.window) {
      dragElement(document.getElementById("editor-header"), document.getElementById("editor-container"));
    }
  }

  render() {
    var splitClass = classNames({
      'split-horiz-editor': this.props.splitH,
      'split-vert-editor': this.props.splitV
    });
    return (
      <div id="editor-container" className={"container editor-container " + splitClass}>
        <div id="editor-header" className="header"></div>
        <textarea value={this.props.input} onChange={this.props.updateText} className={"editor " + splitClass}></textarea>
      </div>
    );
  }
}

export default TextEditor;