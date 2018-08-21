import React from 'react';
import { Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomeContainer from '../HomeContainer';
import EventsContainer from '../EventsContainer';
import CalendarContainer from '../CalendarContainer';
import NagarKirtanContainer from '../NagarKirtanContainer';
import SihkismContainer from '../SihkismContainer';
import ContactUsContainer from '../ContactUsContainer';
import ListenLiveContainer from '../ListenLiveContainer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/11.jpg',
    thumbnail: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/1t.jpg',
  },
  {
    original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/image_set_default.jpg',
    thumbnail: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/image_set_thumb.jpg',
  },
  {
    original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/2.jpg',
    thumbnail: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/1t.jpg',
  }
];

class App extends React.Component {
    render() {
      const address = '2468 Tierra Buena Road Yuba City CA 95993-9654';
      const { selectedTab: { showImageGallery } } =  this.props.app;

      return (<div>
                {showImageGallery && <ImageGallery
                                      items={images}
                                      showIndex={true}
                                      autoPlay={true}
                                      />
                }
                <Header imageGallery={showImageGallery} title={'Sikh Temple Yuba City'} />
                <div>
                    <Route exact path="/" component={HomeContainer} />
                    <Route exact path="/calendar" component={CalendarContainer} />
                    <Route exact path="/nagarKirtan" component={NagarKirtanContainer} />
                    <Route exact path="/events" component={EventsContainer} />
                    <Route exact path="/sikhism" component={SihkismContainer} />
                    <Route exact path="/listenLive" component={ListenLiveContainer} />
                    <Route exact path="/contactUs" component={ContactUsContainer} />
                </div>
                <Footer imageGallery={showImageGallery} terms={address} />
              </div>
      )
    }
}

const mapStateToProps = state => ({
  app: state.app,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
