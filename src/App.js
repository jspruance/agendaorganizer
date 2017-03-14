import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
import Footer from './components/footer';
import Agenda from './components/agenda';
import AddAgendaItem from './components/addagendaitem';
import './App.css';

/**
 * App component - main entry point for agenda organizer app
 * Contains main layout elements such as app bar, tabs and footer
 * as well as serving as the parent component for all other components
 *
 * Holds the primary application state for agendas.
 */

const styles = {
  appBar: {
    backgroundColor: '#2d557D',
  },
  detailscontainer: {
    padding: 20
  },
  tabs: {
    backgroundColor: '#eeeeee',
  },
  tabstext: {
    color: '#2d557c',
  },
  inkbar: {
    backgroundColor: '#7dbbff'
  }
};


class App extends Component {

  constructor(){
    super();
      this.state = {
        agendas: [],
     }
  }

  componentWillMount() {
    this.setState({
      agendas: []
    });
  }

  handleAddAgendaItem(agendaitem) {
    let agendas = this.state.agendas;
    agendas.push(agendaitem);
    this.setState({
      agendas:agendas,
    });
  }

  handleUpdateAgendas(updatedagendas) {
    this.setState({
      agendas:updatedagendas,
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={styles.container}>
          <AppBar
            style={styles.appBar}
            title="Magic Agenda Organizer"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <div style={styles.contentcontainer}>
            <div className="App">
              <Tabs tabItemContainerStyle={styles.tabs} inkBarStyle={styles.inkbar} >
                <Tab label="Agenda" style={styles.tabstext}>
                  <Agenda agendas={this.state.agendas} />
                  <AddAgendaItem addAgendaItem={this.handleAddAgendaItem.bind(this)} />
                </Tab>
                <Tab label="Details" style={styles.tabstext}>
                  <div style={styles.detailscontainer}>Agenda details</div>
                </Tab>
              </Tabs>
            </div>
          </div>
          <Footer agendas={this.state.agendas} addAgendaItem={this.handleAddAgendaItem.bind(this)} updateagendas={this.handleUpdateAgendas.bind(this)} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
