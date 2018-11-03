import React from 'react';
import { Container, Button, Form, Row, Alert } from 'reactstrap';
import CustomInput from '../ContactUsContainer/CustomInput'

const STYLES = {
  FORM: {
    padding: 25,
    margin: '15px auto 0px',
    maxWidth: 500,
    width: '100%'
  },
  HEADER: {
    textAlign: 'center',
    marginBottom: 50,
    color: '#dbb253'
  },
  BUTTON: {
    backgroundColor: '#9fd1f9'
  }
};

class LogInContainer extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        isError: false,
        UserNameError: '',
        PasswordError: ''
      }
    }

    onSignInClick = () => {
      let isFormValid = true;
      if(!this.state.UserName){
        isFormValid = false;
        this.setState({ UserNameError: 'Username is required' });
      } else{
        this.setState({ UserNameError: '' });
      }
      if(!this.state.Password){
        isFormValid = false;
        this.setState({ PasswordError: 'Password is required' });
      } else{
        this.setState({ PasswordError: '' });
      }

      if(isFormValid){
        setTimeout(()=> this.setState({ isError: true }), 500);
      }

   }

    handleChange = (name, value) => {
      this.setState({ [name]: value });
    }

    onFocus = (name) => {
      this.setState({ [name]: '' });
    }

    render() {
      return (
        <Container>
          <Form style={ STYLES.FORM }>
          <h3 style={ STYLES.HEADER }> Sign In</h3>
            <Row>
              <CustomInput
                name={'UserName'}
                label={'UserName'}
                errorMessage={this.state.UserNameError}
                onFocus={() => this.onFocus('UserNameError')}
                icon= {'user'}
                sm={12}
                type="email"
                handleChange={this.handleChange}
              />
              <CustomInput
                name={'Password'}
                label={'Password'}
                errorMessage={this.state.PasswordError}
                onFocus={() => this.onFocus('PasswordError')}
                icon= {'lock'}
                sm={12}
                type="email"
                handleChange={this.handleChange}
              />
            </Row>
            {this.state.isError && <Alert color="danger">You are not registered user. Please contact the admin.</Alert>}
            <Button onClick={this.onSignInClick}
              size="lg"
              style={ STYLES.BUTTON }
              block>
              Submit
            </Button >
          </Form>
        </Container>
      )
    }
}

export default LogInContainer;
