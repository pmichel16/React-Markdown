import React from 'react';
import './sizeButtons.css';

class SizeButtons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="buttons-container">
        <button onClick={this.props.splitWindow}>Windows</button>
        <button onClick={this.props.splitHoriz}>Split Horizontally</button>
        <button onClick={this.props.splitVert}>Split Vertically</button>
      </div>
    )
  }
}

export default SizeButtons;