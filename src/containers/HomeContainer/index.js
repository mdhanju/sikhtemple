import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _get from 'lodash/get';
import InfoRow from './InfoRow';


class HomeContainer extends React.Component {
    render() {
      return (
        <div>
          <InfoRow content={this.props.content}/>
        </div>
      )
    }
}

const mapStateToProps = state => ({
  content :_get(state, 'content.home', {})
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
