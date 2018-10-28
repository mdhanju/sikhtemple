import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Alert } from 'reactstrap';
import _get from 'lodash/get';
import nagarKirtanImg from '../../images/nagarKirtan.jpg';

class NagarKirtanContainer extends React.Component {

    render() {
      const header = _get(this, 'props.nagarKirtan.header');
      const oneContent = _get(this, 'props.nagarKirtan.one');
      const twoContent = _get(this, 'props.nagarKirtan.two');
      const tipsHeader = _get(this, 'props.nagarKirtan.tipsHeader');
      const tips = _get(this, 'props.nagarKirtan.tips');
      const tipOne = _get(this, 'props.nagarKirtan.tipOne');
      const tipTwo = _get(this, 'props.nagarKirtan.tipTwo');
      const tipsHeaderTwo = _get(this, 'props.nagarKirtan.tipsHeaderTwo');
      const tipThree = _get(this, 'props.nagarKirtan.tipThree');

      return (
        <Container>
          <div className="text-center">
            <img style={{ maxWidth: '100%' }} src={nagarKirtanImg} alt={'Nagar Kirtan'} />
          </div>
          <Alert color= "primary" className="text-center" style={{
            margin: '20px auto 20px',
            fontWeight: 400,
            fontSize: 34
          }}>{header}</Alert>
          <div style={{
            color: 'grey',
            margin: '50px auto 25px',
            fontWeight: 300,
            }}>
            {oneContent}
          </div>
          <div style={{
            color: 'grey',
            margin: '25px auto',
            fontWeight: 300,
            }}>
            {twoContent}
          </div>
          <Alert color= "primary" className="text-center" style={{
            margin: '20px auto 20px',
            fontWeight: 400,
            fontSize: 34
          }}>{tipsHeader}</Alert>
          <div style={{
            color: 'grey',
            margin: '25px auto',
            fontWeight: 300,
            }}>
            {tips}
          </div>
          <div style={{
            color: 'grey',
            margin: '25px auto',
            fontWeight: 300,
            }}>
            {tipOne}
          </div>
          <div style={{
            color: 'grey',
            margin: '25px auto',
            fontWeight: 300,
            }}>
            {tipTwo}
          </div>
          <Alert color= "primary" className="text-center" style={{
            margin: '20px auto 20px',
            fontWeight: 400,
            fontSize: 34
          }}>{tipsHeaderTwo}</Alert>
          <div style={{
            color: 'grey',
            margin: '25px auto',
            fontWeight: 300,
            }}>
            {tipThree}
          </div>
        </Container>
      )
    }
}

const mapStateToProps = state => ({
  nagarKirtan :_get(state, 'content.nagarKirtan', {})
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NagarKirtanContainer);
