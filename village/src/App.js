import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';

const AppWrapper = styled.div`
  background-color: #C9E8F4;
  height: 100vw;
`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => this.setState({smurfs: res.data}))
      .catch(err => console.log(err));
  }

  addSmurf = smurf => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        this.setState({smurfs: res.data});
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <AppWrapper>
        <Header />
        <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
        <Route path="/smurf-form" render={props => <SmurfForm addSmurf={this.addSmurf} />} />
      </AppWrapper>
    );
  }
}

export default App;
