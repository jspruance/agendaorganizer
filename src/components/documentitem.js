import React, { Component } from 'react';
import '../App.css';

/**
 * DocumentItem component - Outputs document icon and name for each associated document
 *
 */


class DocumentItem extends Component {
  render() {
    let dname = this.props.documentname;
    return (
        <span className="docimg">
          <span>{dname}</span>
        </span>
    );
  }
}

export default DocumentItem;
