import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { updateTabs, selectedTab } from '../../actions/appActions';
import src from '../../images/khanda.png';
import './header.css';

class HeaderTabs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    handleMenuClick = (e, tab) => {
      const { tabs = [] } = this.props
      const newTabs = tabs.map((item) => {
        if(item.href === tab.href){
          this.props.selectedTab(item);
        }
        item.active = (item.href === tab.href);
        return item;
      })
      this.props.updateTabs(newTabs);
      this.props.handleToggle();
		}

    render(){
      const { item, index, showBorder } = this.props;
      const tabClasses = item.active ? ' active' : '';
      const liStyles = showBorder ? { borderRight: '1px solid white'} : {};

      return (<li
                className="nav-item"
                style={liStyles}
                key={`${item.label}_${index}`}
                >
                  <Link
                    to={item.href}
                    className={`nav-link text-uppercase ${tabClasses}`}
                    onClick={(e) => this.handleMenuClick(e, item)}>
                    {item.label}
                  </Link>
              </li>)
    }
}

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    handleToggle = () => {
      const el = document.getElementById('navbarSupportedContent')
      if (el.style.display === 'block'){
        el.style.display = 'none';
      } else {
        el.style.display = 'block';
      }
    }

    render() {
      const { tabs, imageGallery, background } = this.props;
      const headerStyles = {
        borderBottom: '1px solid #ff9800',
        backgroundColor: '#2196f36b',
      }

      const ulStyles = background ? { backgroundColor: '#ff9701' }: {}

      if (imageGallery) {
        headerStyles.position = 'absolute';
        headerStyles.width = '100%';
        headerStyles.top = 0;
        headerStyles.backgroundColor = 'transparent';
        headerStyles.borderBottom = 0;
      }

      return (
        <header style={headerStyles}>
          <nav className="navbar navbar-expand-lg">
              <a href="index.html">
                  <img id="navLogo" src={src} alt={'Logo'}/>
              </a>
              <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={this.handleToggle}>
                  <i className="fas fa-bars" style={{ color: 'white' }}></i>
                </button>
              <div className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto nav-flex-icons"
                      style={ulStyles}>
                      {tabs.map((item, i) => <HeaderTabs
                                                item={item}
                                                index={i}
                                                key={i}
                                                showBorder={background}
                                                handleToggle={this.handleToggle}
                                                tabs={this.props.tabs}
                                                imageGallery={this.props.imageGallery}
                                                updateTabs={this.props.updateTabs}
                                                selectedTab={this.props.selectedTab}
                                                />
                                            )
                      }
                  </ul>
              </div>
          </nav>
        </header>
      )
    }
}

Header.propTypes = {
  title: PropTypes.string,
  logoUrl: PropTypes.string
};

Header.defaultProps = {
  title: 'Sikh Temple'
};

const mapStateToProps = state => ({
  app: state.app,
  tabs: state.app.tabs,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    updateTabs, selectedTab
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header);
