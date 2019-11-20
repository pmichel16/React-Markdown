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
      windowSplit: "window"
    };
    this.updateText = this.updateText.bind(this);
    this.splitWindow = this.splitWindow.bind(this);
    this.splitHoriz = this.splitHoriz.bind(this);
    this.splitVert = this.splitVert.bind(this);
  }

  updateText(event) {
    this.setState({
      input: event.target.value
    })
  }

  splitWindow() {
    this.setState({
      windowSplit: "window"
    })
  }
  splitHoriz() {
    this.setState({
      windowSplit: "horiz"
    })
  }
  splitVert() {
    this.setState({
      windowSplit: "vert"
    })
  }

  render() {
    return (
      <div className="App">
        <TextEditor
          input={this.state.input}
          updateText={this.updateText}
          windowSplit={this.state.windowSplit}/>
        <MarkdownOutput
          text={this.state.input} 
          windowSplit={this.state.windowSplit}/>
        <SizeButtons
          splitWindow={this.splitWindow}
          splitHoriz={this.splitHoriz}
          splitVert={this.splitVert}/>
        { /*<img src={logo} alt="Logo" height="100px" width="100px" /> */}
      </div>
    );
  }
}

export default App;
