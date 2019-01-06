import React, { Component } from 'react';
import './Calculator.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <h1 className="calculator__title">Rechner.</h1>
        <form className="calculator__form">
          <TextField
            className="calculator__cidr-input"
            variant="filled"
            margin="normal"
            label="CIDR"
          />
          <TextField
            className="calculator__ip-input__half"
            variant="filled"
            margin="normal"
            label="ip from"
          />
          <TextField
            className="calculator__ip-input__half"
            variant="filled"
            margin="normal"
            label="ip to"
          />
          <Button variant="contained" className="button">CLEAR</Button>
          <Button variant="contained" className="button_primary">GO</Button>
        </form>
      </div>
    );
  }
}

export default Calculator;
