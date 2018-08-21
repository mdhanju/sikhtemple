import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

class Footer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      const { imageGallery } = this.props;
      const footerStyles = {
        height: 60,
        backgroundColor: '#2196f36b',
        width: '100%',
        padding: 20,
      }

      if(!imageGallery){
        footerStyles.position = 'absolute';
      }
      return (
        <footer style={footerStyles}>
          <Row>
            <Col>
              <div style={{ color: 'white' }}>© 2018, <a href="http://www.asritsolutions.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>Asritsolutions.</a> All Rights Reserved.</div>
            </Col>
            <Col className="text-right">
              <a href="https://osrit.com/policy" rel="noopener noreferrer" target="_blank" style={{ color: 'white', textDecoration: 'underline' }}>Privacy Policy</a>
              <a href="https://osrit.com/terms" rel="noopener noreferrer" target="_blank" style={{ color: 'white', marginLeft: 10, textDecoration: 'underline' }}>Terms of Service</a>
            </Col>
          </Row>
        </footer>
      )
    }
}

Footer.propTypes = {
  terms: PropTypes.string,
};

Footer.defaultProps = {
  terms: 'Asritsolutions LLC'
};

export default Footer
