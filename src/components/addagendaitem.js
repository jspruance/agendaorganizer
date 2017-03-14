import React, { Component } from 'react';
import AgendaItem from './agendaitem';
import TextField from 'material-ui/TextField';

/**
 * AddAgendaItem component - contains main logic for adding an agenda item
 *
 * Outputs one 'agendaitem' component for each agenda
 * item in state (passed in as prop from app component).
 *
 * Passes new agenda item back to app component where state is updated
 */

const styles = {
  inputStyle: {
    paddingLeft: 20
  },
  underlineFocusStyle: {
    borderColor: "#58cb8e",
  },
  buttonStyles: {
    marginBottom: 50
  }
};

class AddAgendaItem extends Component {

  constructor(){
    super();
    this.state = {
      newAgendaItem: {},
      placeholdertext: "Enter a new agenda item...",
    }
  }

  handleSubmit(e) {
    if(e.key === 'Enter'){
      if(this.refs.title.value === ""){
        alert("agenda item is required");
      }else{
        this.setState({
          newAgendaItem:{
            title: e.target.value,
          }}, function(){
            //console.log(this.state);
            this.props.addAgendaItem(this.state.newAgendaItem);

        });
      }
      e.preventDefault();
      e.target.value = "";
      e.target.placeholder = "Enter a new agenda item...";
    }
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <TextField
              inputStyle={styles.inputStyle}
              underlineFocusStyle={styles.underlineFocusStyle}
              style={styles.buttonStyles}
              id="addagendaitem"
              hintText={this.state.placeholdertext}
              ref="title"
              fullWidth={true}
              onKeyDown={this.handleSubmit.bind(this)}
            /><br />
          </div>
        </form>
      </div>
    )
  }

}


export default AddAgendaItem;
