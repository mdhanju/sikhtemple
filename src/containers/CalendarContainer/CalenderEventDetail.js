import React from 'react';
import moment from 'moment';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CalenderEventDetail extends React.Component {
  toggle = () => {
    this.props.onHide()
  }

  parseDate = (e) => {
    if (e) {
      return moment(e).format('MMMM Do YYYY, h:mm A');
    }
  }

  render() {
    const eventData = this.props.eventData || {};
    return (
        <Modal isOpen={this.props.show} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{eventData.title}</ModalHeader>
          <ModalBody>
            <div>{eventData.title}</div>
            <div>Start: {this.parseDate(eventData.start)}</div>
            <div>End: {this.parseDate(eventData.end)}</div>
          </ModalBody>
          <ModalFooter>
            <Button
              style={{ margin: 'auto'}}
              color="secondary" onClick={this.toggle}>CLOSE</Button>
          </ModalFooter>
        </Modal>
    );
  }
}

export default CalenderEventDetail;
