import React from 'react';
import marked from 'marked';
import './MarkdownOutput.css';

class MarkdownOutput extends React.Component {
  constructor(props) {
    super(props);
    this.markdownText = this.markdownText.bind(this);
  }
  markdownText() {
    const markedText = marked(this.props.text, { sanitize: true });
    return { __html: markedText };
  }
  render() {
    return (
      <div>
        <div id="output-container"> 
          <p>Input text:</p>
          <p dangerouslySetInnerHTML={this.markdownText()}></p>
        </div>
      </div>
      )
  }
}

export default MarkdownOutput;