import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FileUpload from './fileupload';

/**
 * AddDocumentsDialog component - contains 'add document'
 * dialog and button by with which it is invoked
 *
 * This component contains the main logic for matching uploaded
 * documents to agenda items
 */

 const styles = {
   container: {
     paddingTop: 35
   },
   button: {
     marginLeft: 20,
     marginRight: 20,
     marginTop: 10,
     float: 'right',
   },
   heading: {
     color: '#444444',
   },
   label: {
     color: '#268eff',
   }
 }

 class AddDocumentsDialog extends React.Component {
  state = {
    open: false,
    documentnames: []
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  //allocate documents to corresponding agenda items
  allocateDocs = () => {
    let storedDocs = JSON.parse(sessionStorage.getItem('agendaDocuments'));
    let agendas = this.props.agendas;

    //loop through saved documents
    for(let j = 0; j < storedDocs.length; j++) {
      //is leading char a number?
      let leadingChar = storedDocs[j].charAt(0);
      var isIndex = parseInt(leadingChar);
      //if so, add to corresponding agenda item if it exists
      if(!isNaN(isIndex)) {
        if(isIndex <= agendas.length) {
          //add to corresponding agenda item number
          //pass to this.props.updateagendas
          agendas[isIndex - 1]['docs'] = storedDocs[j] + " ";
          this.props.updateagendas(agendas);
        }
      }else{
        //attempt to match doc name to an agenda item name
        //loop through agenda items and see if there is a match
        for(let i = 0; i < agendas.length; i++) {
          if(agendas[i].title == storedDocs[j]){
            //add to corresponding agenda item
            //pass to this.props.updateagendas
            agendas[i]['docs'] = storedDocs[j];
            this.props.updateagendas(agendas);
          }else if((agendas[i].title.includes(storedDocs[j])) || (storedDocs[j].includes(agendas[i].title))) {
            //add to corresponding agenda item
            //pass to this.props.updateagendas
            agendas[i]['docs'] = storedDocs[j];
            this.props.updateagendas(agendas);
          }
        }

      }

      let docname = storedDocs[j].substr(0, storedDocs[j].lastIndexOf('.'));
    }
  }

  handleSubmit = () => {
    this.setState({open: false});
    //simulate db persistence
    sessionStorage.removeItem('agendaDocuments');
    sessionStorage.setItem('agendaDocuments', JSON.stringify(this.state.documentnames))
    this.allocateDocs();
  };

  handleSaveDocuments(updateddocuments) {
    //save doc names to state
    let documentnames = this.state.documentnames;
    for(let i = 0; i < updateddocuments.length; i++) {
      documentnames.push(updateddocuments[i].name);
    }
    this.setState({
      documentnames:documentnames,
    });
  }

  render() {
    const actions = [
      <FlatButton
        labelStyle={styles.label}
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        labelStyle={styles.label}
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <div>
        <RaisedButton
          backgroundColor="#268eff"
          labelColor="#ffffff"
          style={styles.button}
          label="Add document"
          onTouchTap={this.handleOpen}
        />
        <Dialog
          titleStyle={styles.header}
          title="Add documents to agenda items"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <FileUpload saveDocuments={this.handleSaveDocuments.bind(this)} />
        </Dialog>
      </div>
    );
  }
}

export default AddDocumentsDialog;
