import React, { Component } from 'react';
import './Calculator.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffa994',
      main: '#f67866',
      dark: '#bf483b',
      contrastText: '#000',
    },
    secondary: {
      light: '#8e99f3',
      main: '#5c6bc0',
      dark: '#26418f',
      contrastText: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

class Calculator extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="calculator">
          <form className="calculator__form">
            <h1 className="calculator__title">Rechner.</h1>
            <TextField
              className="calculator__input"
              variant="filled"
              margin="normal"
              label="CIDR"
            />
            <div className="calculator__form-fieldset">
              <div className="calculator__form-input__half">
                <TextField
                  className="calculator__input"
                  variant="filled"
                  margin="normal"
                  label="IP from"
                />
              </div>
              <div className="calculator__form-input__half">
                <TextField
                  className="calculator__input"
                  variant="filled"
                  margin="normal"
                  label="IP to"
                />
              </div>
            </div>
            <div className="calculator__form-buttons">
              <div className="calculator__form-input__half">
                <Button
                  className="button"
                  variant="contained"
                  color="secondary"
                >
                  Clear
                </Button>
              </div>
              <div className="calculator__form-input__half">
                <Button
                  className="button"
                  variant="contained"
                  color="primary"
                >
                  Go
                </Button>
              </div>
            </div>
          </form>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Calculator;
