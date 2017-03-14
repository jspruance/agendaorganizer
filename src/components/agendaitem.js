import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import DocumentItem from './documentitem';
import $ from 'jquery';
import '../App.css';

/**
 * AgendaItem component - Outputs list item element for newly entered agenda item
 *
 */

const styles = {
  agendaitem: {
    padding: 0,
  },
  list: {
    padding: 0
  }
};

class AgendaItem extends Component {
  render() {
    let agendaItemText = this.props.number + ". " + this.props.agendaitem.title;
    let documentText = "";
    let $imgEl = $("<span>", {"class": "docimg"});

    if(this.props.agendaitem.docs) {
      let returnDocItem = () => {
        return (
          <DocumentItem documentname={this.props.agendaitem.docs}></DocumentItem>
        );
      }
      documentText = returnDocItem();
    };

    return (
      <List style={styles.list}>
        <ListItem style={styles.agendaitem} className="AgendaItem">
            {agendaItemText}{documentText}
          </ListItem>
        <Divider />
      </List>
    );
  }
}

export default AgendaItem;
