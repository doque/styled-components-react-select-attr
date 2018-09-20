import React, { Component } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const FlexSelect = styled(Select).attrs({
  isClearable: false,
  noOptionsMessage: () => 'nothing'
})`
  display: flex;
`;
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class App extends Component {
  render() {
    return <FlexSelect options={options} />;
  }
}

export default App;
