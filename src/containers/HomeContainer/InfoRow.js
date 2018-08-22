import React from 'react';
import _get from 'lodash/get';

class InfoRow extends React.Component {
    render() {
      const oneContent = _get(this, 'props.content.one', '');
      const twoContent = _get(this, 'props.content.two', '');

      return (
        <div style={{
          padding: 20,
          margin: 20
        }}>
          {/*<h4 className="text-center"
              style={{
                margin: '20px auto 0px',
                color: 'grey',
                fontWeight: 400,
              }}>
              {heroContent}
          </h4>
          <div className="text-right"
                style={{
                  color: '#ff9800',
                  marginBottom: 10,
                  fontWeight: 300,
                }}>
                {`-`}{heroAuthor}
          </div>
          <h4 style={{
            color: 'grey',
            }}>
            {historyLabel}
          </h4>*/}

          <div style={{
            color: 'grey',
            margin: '20px auto',
            fontWeight: 300,
            }}>
            {oneContent}
          </div>
          <div style={{
            color: 'grey',
            marginBottom: 10,
            fontWeight: 300,
            }}>
            {twoContent}
          </div>
        </div>
      )
    }
}

export default InfoRow;
