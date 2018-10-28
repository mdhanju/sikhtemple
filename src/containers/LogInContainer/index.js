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
        isError: false
      }
    }

    onSignInClick = () => {
      let isFormValid = false;
      if(!isFormValid){
        this.setState({ isError: true })
      }
   }

    handleChange = (name, value) => {
      this.setState({ [name]: value });
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
                icon= {'user'}
                sm={12}
                type="email"
                handleChange={this.handleChange}
              />
              <CustomInput
                name={'Password'}
                label={'Password'}
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
