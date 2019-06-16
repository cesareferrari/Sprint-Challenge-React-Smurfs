import React, { Component } from 'react';
import styled from 'styled-components';

import Smurf from './Smurf';

const SmurfList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
  margin: auto;
`;


class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <SmurfList>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </SmurfList>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
