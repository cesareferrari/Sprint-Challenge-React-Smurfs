import React, { Component } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 40%;
  margin: 20px auto;

  input[type="text"] {
    font-size: 1rem;
    padding: 6px;
    display: block;
    width: 100%;
    margin-bottom: 10px;
    box-sizing: border-box;
  }

  button {
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    font-size: .9rem;
    background-color: #0D76A2;
    padding: 10px 20px;
    display: block;
    width: 250px;
    text-align: center;
    margin: auto;
  }
`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addSmurf(this.state);

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <FormWrapper>
        <form onSubmit={this.addSmurf}>
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button>Add to the village</button>
        </form>
      </FormWrapper>
    );
  }
}

export default SmurfForm;
