import React from 'react';
import Dropzone from 'react-dropzone';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import FileUploadListItem from './fileuploadlistitem'

/**
 * FileUpload component - contains dropzone element for uploading files
 *
 * Contains 'documents' array in state, for holding all uploaded documents
 * Updates document count and adds a list item for each uploaded document,
 * which displays the document filename
 */

const styles = {
  dropzone: {
    padding: 20,
    marginBottom: 12,
    color: '#268eff',
    border: '2px dashed #7dbbff',
    cursor: 'pointer',

  },
  activestyle: {
    backgroundColor: '#e5f2ff',
  },
  browse: {
    float: 'right',
    fontSize: 12,
    paddingBottom: 5,
  },
  documentlist: {
    clear: 'both',
  }
}

class FileUpload extends React.Component {

    state = {
      documents: [],
    };

    onDrop = (files) => {
      //console.log('Received files: ', files);
      let documents = this.state.documents;
      for(let i = 0; i < files.length; i++) {
        documents.push(files[i]);
      }

      //update state with new files
      this.setState({
        documents:documents,
      });

      //pass state back to parent component
      this.props.saveDocuments(this.state.documents);

      //console.log(this.state.documents[1].name)
    };

    onOpenClick = () => {
      this.refs.dropzone.open();
    };

    render() {
      let fileuploadlistitems;
      if(this.state.documents.length > 0){
        fileuploadlistitems = this.state.documents.map(document => {
          return (
            <FileUploadListItem key={document.name} document={document} />
          );
        });
      }
      return (
          <div>
            <Dropzone ref="dropzone" activeStyle={styles.activestyle} style={styles.dropzone} onDrop={this.onDrop}>
              <div>+ Drop new documents here</div>
            </Dropzone>
            <div style={styles.browse}>
              <span className="dark-med-gray">or </span>
              <a href="#" onClick={this.onOpenClick}>
                  Browse your computer
              </a>
            </div>
            <div style={styles.documentlist}>
              <List>
                <Divider />
                  <ListItem>Available documents ({this.state.documents.length})</ListItem>
                <Divider />
                <div className="FileUploadListItems">
                  {fileuploadlistitems}
                </div>
              </List>
            </div>
          </div>
      );
    }
};

export default FileUpload;
