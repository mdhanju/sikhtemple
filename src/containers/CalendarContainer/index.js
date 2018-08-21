import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'reactstrap';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import _get from 'lodash/get';
import CalenderEventDetail from './CalenderEventDetail';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class CalendarContainer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        eventModal: {
          show: false,
          data: {}
        }
      };
    }

    onSelectEvent = (eventData) => {
      // console.log(' ::: onSelectEvent eventData ::: ', eventData);
      this.setState({
        eventModal: {
          show: true,
          eventData
        }
      })
    }

    hideEventModal = () => {
      this.setState({
        eventModal: {
          show: false,
          eventData: {}
        }
      })
    }

    render() {
      return (
            <div style={{
              minHeight: 600,
              padding: 20,
              minWidth: 750,
              display: 'grid'
            }}>
            <CalenderEventDetail {...this.state.eventModal} onHide={this.hideEventModal}/>
              <BigCalendar
                events={this.props.calendarEvents}
                step={60}
                showMultiDayTimes
                selectable={true}
                onSelectEvent={this.onSelectEvent}
                defaultDate={new Date(2015, 3, 1)}
                views={['month', 'agenda']}
              />
            </div>
      )
    }
}

const mapStateToProps = state => ({
  calendarEvents :_get(state, 'calendar.events', [])
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
