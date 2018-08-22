import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomeContainer from '../HomeContainer';
import EventsContainer from '../EventsContainer';
import NagarKirtanContainer from '../NagarKirtanContainer';
import SihkismContainer from '../SihkismContainer';
import ContactUsContainer from '../ContactUsContainer';
import ListenLiveContainer from '../ListenLiveContainer';
import LogInContainer from '../LogInContainer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ImageGallery from 'react-image-gallery';

class App extends React.Component {
    render() {
      const address = '2468 Tierra Buena Road Yuba City CA 95993-9654';
      const { selectedTab: { showImageGallery } } =  this.props.app;
      const { images } = this.props.carousel;
      return (<div>
          <div style={{ minHeight: 'calc(100vh - 114px)' }}>
                {showImageGallery && <ImageGallery
                                      items={images}
                                      showIndex={true}
                                      autoPlay={false}
                                      />
                }
                <Header background={false} imageGallery={showImageGallery} title={'Sikh Temple Yuba City'} />
                <div>
                    <Route exact path="/" component={HomeContainer} />
                    <Route exact path="/nagarKirtan" component={NagarKirtanContainer} />
                    <Route exact path="/events" component={EventsContainer} />
                    <Route exact path="/sikhism" component={SihkismContainer} />
                    <Route exact path="/listenLive" component={ListenLiveContainer} />
                    <Route exact path="/contactUs" component={ContactUsContainer} />
                    <Route exact path="/login" component={LogInContainer} />
                </div>
              </div>
              <Footer imageGallery={showImageGallery} terms={address} />
            </div>
      )
    }
}

const mapStateToProps = state => ({
  app: state.app,
  carousel: state.carousel
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
