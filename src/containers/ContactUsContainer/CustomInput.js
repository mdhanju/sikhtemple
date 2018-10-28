import React from 'react';
import { Col, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

class CustomInput extends React.Component{

  handleChange = (event) => {
    this.props.handleChange(this.props.name, event.target.value);
  }

  render () {
    const name = this.props.name
    const label = this.props.label
    const icon = this.props.icon;
    const xs = this.props.xs || 12;
    const sm = this.props.sm || 6;
    const type = this.props.type || 'text';

    return (
      <Col xs={xs} sm={sm}>
        <FormGroup >
            <Label
              for={name}>
              {label} (required)
            </Label>
            <i className={`fa fa-${icon}`}
              style={{ marginTop: 42, position: 'absolute', right: 6 }}
            />
            <Input
              type={type}
              name={name}
              id={name}
              placeholder={label}
              defaultValue={this.props.value}
              onChange={this.handleChange}
              onFocus={this.props.onFocus}
              invalid={!!this.props.errorMessage}
            />
            <FormFeedback>{this.props.errorMessage}</FormFeedback>
          </FormGroup>
        </Col>
        )
  }
}
export default CustomInput;
