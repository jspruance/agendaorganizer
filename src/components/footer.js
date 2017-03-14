import React, {Component} from 'react';
import {BottomNavigation} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import AddAgendaItem from './addagendaitem';
import AddDocumentsDialog from './adddocuments';
import $ from 'jquery';

/**
 * Footer component
 * Contains 'publish' button for adding agenda items
 */

 const styles = {
   container: {
     paddingTop: 35
   },
   button: {
     marginLeft: 20,
     marginTop: 10,
   }
 }

class Footer extends Component {

  constructor(){
    super();
    this.state = {
      newAgendaItem: {},
      placeholdertext: "Enter a new agenda item...",
    }
  }

  handleButtonClick = () => {
    let newAgendaItem = {};
    newAgendaItem['title'] = $('#addagendaitem').val();
    this.props.addAgendaItem(newAgendaItem);
    $('#addagendaitem').val("");
    $('#addagendaitem').attr("placeholder", "Enter a new agenda item...");
  }

  handleUpdateAgendas(updatedagendas) {
    //pass agenda updates back up to app component for rerendering
    this.props.updateagendas(updatedagendas);
  }


  render() {
    return (
        <Paper zDepth={1}>
          <BottomNavigation >
            <div>
              <RaisedButton
                backgroundColor="#58cb8e"
                labelColor="#ffffff"
                label="Publish"
                style={styles.button}
                onClick={this.handleButtonClick.bind(this)}
              />
            </div>
            <div>
              <AddDocumentsDialog agendas={this.props.agendas} updateagendas={this.handleUpdateAgendas.bind(this)} />
            </div>
          </BottomNavigation>
        </Paper>

    );
  }
}

export default Footer;
