import React, {useState, useContext, useEffect, createContext } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'gatsby';
import classNames from 'classnames';
//import logo from '../../../static/logos/pn-logo-48.png';
import MobileNavLinks from './nav-mobile-links/MobileNavLinks';
//import MobileNavContext from '../../context/MobileNavContext';

const MobileNavContext = createContext({
  mobileNavOpen: false,
  toggleMobileNav: () => {},
  showMobileNavMenu: false,
  toggleMobileNavView: () => {},
});

const Navigation = () => {
  const MobileNavContext = useContext(MobileNavContext);
  //const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const active = classNames('mobile-menu', {
    open: MobileNavContext.mobileNavOpen,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        MobileNavContext.toggleMobileNav(false);
        MobileNavContext.toggleMobileNavView(false);
      } else if (window.innerWidth < 767) {
        MobileNavContext.toggleMobileNavView(true);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    
        <header className="navigation-wrapper">
          <div className="navigation-header">
            <span className="navigation-names">
              <Link className="link" to="/">
                <img className="logo" src="" alt="pn initials logo"></img>
                <span>Paige Niedringhaus</span>
              </Link>
            </span>
            <span className="navigation-links">
              {MobileNavContext.showMobileNavMenu ? (
                <button
                  aria-label="Toggle Mobile Menu Button"
                  aria-expanded={MobileNavContext.mobileNavOpen}
                  className={active}
                  onClick={() => {
                    MobileNavContext.toggleMobileNav(
                      !MobileNavContext.mobileNavOpen,
                    );
                  }}
                >
                  <div className="bar-one" />
                  <div className="bar-two" />
                  <div className="bar-three" />
                </button>
              ) : (
                <nav aria-label="desktop navigation">
                  <Link className="link" activeClassName="active" to="/blog">
                    Blog
                  </Link>
                  <Link className="link" activeClassName="active" to="/courses">
                    Courses
                  </Link>
                  <Link className="link" activeClassName="active" to="/media">
                    Media
                  </Link>
                  <Link className="link" activeClassName="active" to="/about">
                    About
                  </Link>
                  <Link className="link" activeClassName="active" to="/contact">
                    Contact
                  </Link>
                </nav>
              )}
            </span>
          </div>
        </header>
     
      {MobileNavContext.showMobileNavMenu ? (
        <MobileNavLinks open={MobileNavContext.mobileNavOpen} />
      ) : null}
    </>
  );
};

export default Navigation;