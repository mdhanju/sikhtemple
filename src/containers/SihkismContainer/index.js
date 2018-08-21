import React from 'react';
import _get from 'lodash/get';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from 'reactstrap';

class SihkismContainer extends React.Component {
    render() {
      const sikhismLabel = _get(this, 'props.sikhism.sikhism', {})
      const paraOne = _get(this, 'props.sikhism.one', {})
      return (
        <Container>
          <h2 className="text-center text-uppercase"
              style={{
                margin: 25,
              }}>
              {sikhismLabel}
          </h2>
          <h4 style={{
              margin: 25
            }}>
            {paraOne}
          </h4>
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
