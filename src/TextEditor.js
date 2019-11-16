import React from 'react';
import MarkdownOutput from './MarkdownOutput.js'
import { dragElement } from './dragElement.js'
import './Text.css'


const origText = '# Markdown Previewer\nThis is a Markdown previewer built with React and the marked package' +
  '(https://cdnjs.com/libraries/marked). You can ' +
  'write in **bold**, _italic_, or _**both**_! \nIn addition to the header above, you can write\n## Sub-Headers\n' +
  '### and Sub-Sub-Headers'

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: origText
    };
    this.updateText = this.updateText.bind(this);
  }
  updateText(event) {
    this.setState({
      input: event.target.value
    })
  }

  //Make the editor draggable.
  componentDidMount() {
    dragElement(document.getElementById("editor-header"), document.getElementById("editor-container"));
  }

  render() {
    return (
      <div>
        <div id="editor-container" className="container">
          <div id="editor-header" className="header"></div>
          <textarea id="editor" value={this.state.input} onChange={this.updateText}></textarea>
        </div>
        <MarkdownOutput text={this.state.input} />
      </div>
    );
  }
}

export default TextEditor;