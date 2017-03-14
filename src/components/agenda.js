import React, { Component } from 'react';
import AgendaItem from './agendaitem';

/**
 * Agenda component - parent component for 'agendaitem' and 'addagendaitem' components
 *
 * Outputs one 'agendaitem' component for each agenda
 * item in state (passed in as prop from app component)
 */

class Agenda extends Component {

  render() {
    let agendaitems;
    if(this.props.agendas){
      agendaitems = this.props.agendas.map((agendaitem, index) => {
        //console.log(agendaitem);
        return (
          <AgendaItem key={agendaitem.title} number={index + 1} agendaitem={agendaitem} />
        );
      });
    }
    //console.log(this.props);
    return (
      <div className="Agenda">
        {agendaitems}
      </div>
    );
  }
}

export default Agenda;
