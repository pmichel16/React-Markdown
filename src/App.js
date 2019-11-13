import React from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';

const origText = '# Markdown Previewer\nThis is a Markdown previewer built with React and the marked package' +
  '(https://cdnjs.com/libraries/marked). You can ' +
  'write in **bold**, _italic_, or _**both**_! \nIn addition to the header above, you can write\n## Sub-Headers\n' +
  '### and Sub-Sub-Headers'

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: origText
    };
    this.updateText = this.updateText.bind(this);
    this.markdownText = this.markdownText.bind(this);
  }
  updateText(event) {
    this.setState({
      input: event.target.value
    })
  }
  markdownText() {
    const markedText = marked(this.state.input, { sanitize: true });
    return { __html: markedText };
  }
  render(){
    return (
      <div>
        <textarea id="markdown-text" value={this.state.input} onChange={this.updateText}></textarea>
        <p>Input text:</p>
        <p dangerouslySetInnerHTML={this.markdownText()}></p>
        <img src={logo} alt="Logo" height="100px" width="100px" />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <TextInput />
    </div>
  );
}

export default App;
