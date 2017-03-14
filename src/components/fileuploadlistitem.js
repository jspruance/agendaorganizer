import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

/**
 * FileUploadListItem component - List item displayed for each uploaded document
 *
 */

const styles = {
  fileuploadlistitem: {
    padding: 0,
    color: '#58cb8e'
  },
  list: {
    padding: 0
  }
};

class FileUploadListItem extends Component {
  render() {
    return (
      <List style={styles.list}>
        <ListItem style={styles.fileuploadlistitem} primaryText={this.props.document.name} />
        <Divider />
      </List>
    );
  }
}

export default FileUploadListItem;
