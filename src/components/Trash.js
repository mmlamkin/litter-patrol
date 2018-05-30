import React, { Component } from 'react';
import '../App.css';
import TrashIcon from '../trash.svg';

class Trash extends Component {

  onHasTrash = () => {
    this.props.trashClicked(this.props.index);
  }

  isVisible = () => {
    if (this.props.trashPresent) {
      return <img src={ TrashIcon } alt="Trash" className="trash" onClick={this.onHasTrash}></img>
    }
  }

  render() {

    return (
      <div className="bin">
        {this.isVisible()}
      </div>
    );
  }
}

export default Trash;
