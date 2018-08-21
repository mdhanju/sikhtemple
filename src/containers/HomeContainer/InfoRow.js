import React from 'react';
import { Container } from 'reactstrap';
import _get from 'lodash/get';

class InfoRow extends React.Component {
    render() {
      console.log(this.props.content.one);
      const historyLabel = _get(this, 'props.content.history', '');
      const oneContent = _get(this, 'props.content.one', '');
      const heroContent = _get(this, 'props.content.hero', '');
      const heroAuthor = _get(this, 'props.content.heroAuthor', '');
      return (
        <div style={{
          padding: 20,
          margin: 20
        }}>
          <h3 className="text-center"
              style={{ margin: '20px auto 0px', color: '#ff9800' }}>
              {heroContent}
          </h3>
          <div className="text-right"
                style={{ color: '#ff9800', marginBottom: 10 }}>
                {`-`}{heroAuthor}
          </div>
          <h4>{historyLabel}</h4>
          {oneContent}
        </div>
      )
    }
}

export default InfoRow;
