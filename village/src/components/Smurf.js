import React from 'react';
import styled from 'styled-components';

const SmurfCard = styled.div`
  border: 1px solid gray;
  padding: 10px;
  background-color: white;
  width: 200px;
  margin: 20px;
`;

const Smurf = props => {
  return (
    <SmurfCard>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </SmurfCard>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

