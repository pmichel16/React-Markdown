import React from 'react';
import TextEditor from './TextEditor.js';
import MarkdownOutput from './MarkdownOutput.js';
import SizeButtons from './SizeButtons.js';

const origText = '# Markdown Previewer\n## Summary\nThis is a Markdown previewer built with React and the marked package' +
  '(https://cdnjs.com/libraries/marked).\n## Features\nThe previewer can display anything that Markdown can. ' +
  'You can write in **bold**, _italic_, or _**both**_! You can also write `inline code` or \n```\n//Multi-line ' +
  'code\nconsole.log("Hello, world!")\nconsole.log("Let\'s write in Markdown");\n```\nYou can also make a table:\n\n' +
  'Header 1 | Header 2 | Header 3\n-------|-------|-------\nTable|contents|go\ninside|the|table!\n\nOr a list:\n\n- List Item\n- More list' + 
  '\n    - Indented list\n\nSo go crazy and write a beautiful document!';
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
        <SizeButtons
          splitWindow={this.splitWindow}
          splitHoriz={this.splitHoriz}
          splitVert={this.splitVert} />
        <TextEditor
          input={this.state.input}
          updateText={this.updateText}
          windowSplit={this.state.windowSplit}/>
        <MarkdownOutput
          text={this.state.input} 
          windowSplit={this.state.windowSplit}/>
      </div>
    );
  }
}

export default App;
