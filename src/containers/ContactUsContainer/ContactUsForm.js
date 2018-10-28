import React from 'react';
import axios from 'axios';
import { Container, Row, Button, Form, Alert } from 'reactstrap';
import CustomInput from './CustomInput'

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

class ContactUsForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loading: false,
      isSuccess: false,
      firstNameError: '',
      lastNameError: '',
      emailError: '',
      phoneError: '',
      messageError: ''
    }
  }

  onContactUsClick = () => {
    let isFormValid = true;
    if(!this.state.firstName){
      isFormValid = false;
      this.setState({ firstNameError: 'Firstname is required' });
    } else{
      this.setState({ firstNameError: '' });
    }
    if(!this.state.lastName){
      isFormValid = false;
      this.setState({ lastNameError: 'LastName is required' });
    } else{
      this.setState({ lastNameError: '' });
    }
    if(!this.state.email){
      isFormValid = false;
      this.setState({ emailError: 'Email is required' });
    } else{
      this.setState({ emailError: '' });
    }
    if(!this.state.phone){
      isFormValid = false;
      this.setState({ phoneError: 'Phone is required' });
    } else{
      this.setState({ phoneError: '' });
    }
    if(!this.state.message){
      isFormValid = false;
      this.setState({ messageError: 'Message is required' });
    } else{
      this.setState({ messageError: '' });
    }

    if (isFormValid) {
      this.setState({ loading: true })
      axios.post('https://asr-api.herokuapp.com/api/issues/contactus', {

          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          phone: this.state.phone,
          message: this.state.message,
          subject: this.state.subject
        })
        .then((response) => {
          console.log(response);
          this.setState({ isSuccess: true })
        })
        .catch((error) => {
          console.log(error);
          this.setState({ isError: true })
        })
        .then(() => {
          this.setState({ loading: false })
        })
      }
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  onFocus = (name) => {
    this.setState({ [name]: '' });
  }

  render () {
    return (<Container style={{
    }}>
            <Form
              style={ STYLES.FORM }>
                <h3 style={ STYLES.HEADER }> Contact Us</h3>
              <Row>
                  <CustomInput
                    name={'firstName'}
                    label={'First Name'}
                    errorMessage={this.state.firstNameError}
                    onFocus={() => this.onFocus('firstNameError')}
                    icon= {'user'}
                    value={this.state.firstName}
                    handleChange={this.handleChange}
                  />
                  <CustomInput
                    name={'lastName'}
                    label={'Last Name'}
                    errorMessage={this.state.lastNameError}
                    onFocus={() => this.onFocus('lastNameError')}
                    icon= {'user'}
                    handleChange={this.handleChange}
                    required
                  />
                  <CustomInput
                    name={'email'}
                    label={'Enter your email'}
                    errorMessage={this.state.emailError}
                    onFocus={() => this.onFocus('emailError')}
                    icon= {'envelope'} sm={12}
                    type="email"
                    handleChange={this.handleChange}
                  />
                  <CustomInput
                    name={'phone'}
                    label={'Enter your phone number'}
                    errorMessage={this.state.phoneError}
                    onFocus={() => this.onFocus('phoneError')}
                    icon= {'phone'}
                    sm={12} type="tel"
                    handleChange={this.handleChange}
                  />
                  <CustomInput
                    name={'message'}
                    label={'Message'}
                    errorMessage={this.state.messageError}
                    onFocus={() => this.onFocus('messageError')}
                    sm={12}
                    type="textarea"
                    handleChange={this.handleChange}
                  />
              </Row>
              {this.state.isSuccess && <Alert color="success">Message is sucessfully declared</Alert>}
              <Button onClick={this.onContactUsClick}
                size="lg"
                block
                disabled={this.state.loading}
                style={ STYLES.BUTTON }>
                {this.state.loading && <i className="fas fa-spinner fa-spin"></i>} Submit
              </Button>
            </Form>

          </Container>)
  }
}

export default ContactUsForm;
