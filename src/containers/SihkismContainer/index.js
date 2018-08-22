import React from 'react';
import _get from 'lodash/get';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from 'reactstrap';
import wordings from '../../images/wordings.jpg';

class SihkismContainer extends React.Component {
    render() {
      const header = _get(this, 'props.sikhism.header', '');
      const paraOne = _get(this, 'props.sikhism.one', '');
      const paraTwo = _get(this, 'props.sikhism.two', '');
      const paraThree = _get(this, 'props.sikhism.two', '');
      const paraFour = _get(this, 'props.sikhism.two', '');
      return (
        <Container>
          <div className="text-center">
            <img style={{ maxWidth: '100%', marginTop: 25 }} src={wordings} alt={'Sikhism'}/>
          </div>
          <div style={{
              margin: 25,
              color: 'grey',
              fontWeight: 600
            }}>
            {header}
          </div>
          <div style={{
              margin: 25,
              color: 'grey'
            }}>
            {paraOne}
          </div>
          <div style={{
              margin: 25,
              color: 'grey'
            }}>
            {paraTwo}
          </div>
          <div style={{
              margin: 25,
              color: 'grey'
            }}>
            {paraThree}
          </div>
          <div style={{
              margin: 25,
              color: 'grey'
            }}>
            {paraFour}
          </div>
        </Container>
      )
    }
}

const mapStateToProps = state => ({
  sikhism: _get(state, 'content.sikhism', {})
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SihkismContainer);
