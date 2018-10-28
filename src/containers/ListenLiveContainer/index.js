import React from 'react';
import { Container } from 'reactstrap';

import eventImg from '../../images/event.jpg';

class ListenLiveContainer extends React.Component {
    render() {
      return (
        <Container>
          <div className="text-center" style={{ margin: 50, minHeight: 600  }}>
            <img src = {eventImg} alt="No Live Event Available"/>
          </div>
        </Container>
      )
    }
}

export default ListenLiveContainer;
