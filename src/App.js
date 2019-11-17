import React from 'react';
import TextEditor from './TextEditor.js';
import MarkdownOutput from './MarkdownOutput.js';
import SizeButtons from './SizeButtons.js';
import logo from './logo.svg';
import './App.css';

const origText = '# Markdown Previewer\nThis is a Markdown previewer built with React and the marked package' +
  '(https://cdnjs.com/libraries/marked). You can ' +
  'write in **bold**, _italic_, or _**both**_! \nIn addition to the header above, you can write\n## Sub-Headers\n' +
  '### and Sub-Sub-Headers';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: origText,
      window: true,
      splitH: false,
      splitV: false
    };
    this.updateText = this.updateText.bind(this);
    this.window = this.window.bind(this);
    this.splitHoriz = this.splitHoriz.bind(this);
    this.splitVert = this.splitVert.bind(this);
  }

  updateText(event) {
    this.setState({
      input: event.target.value
    })
  }

  window() {
    this.setState({
      window: true,
      splitH: false,
      splitV: false
    })
  }
  splitHoriz() {
    this.setState({
      window: false,
      splitH: true,
      splitV: false
    })
  }
  splitVert() {
    this.setState({
      window: false,
      splitH: false,
      splitV: true
    })
  }

  render() {
    return (
      <div className="App">
        <TextEditor
          input={this.state.input}
          updateText={this.updateText}
          window={this.state.window}
          splitH={this.state.splitH}
          splitV={this.state.splitV}/>
        <MarkdownOutput
          text={this.state.input} 
          window={this.state.window}
          splitH={this.state.splitH}
          splitV={this.state.splitV}/>
        <SizeButtons
          splitHoriz={this.splitHoriz}
          splitVert={this.splitVert}/>
        { /*<img src={logo} alt="Logo" height="100px" width="100px" /> */}
      </div>
    );
  }
}

export default App;
