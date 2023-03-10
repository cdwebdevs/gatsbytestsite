import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Navigation from './navigation/Navigation';
//import Footer from '../Footer/Footer';
import MobileNavContext from '../context/MobileNavContext';
import './mainlayout.scss';

const MainLayout = ({ children }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);
  const layoutContainerPositioning = classNames('layout-container', {
    open: mobileNavOpen,
  });

  useEffect(() => {
    console.log ('hey')
    if (window.innerWidth > 767) {
      setShowMobileNavMenu(false);
    } else if (window.innerWidth < 767) {
      setShowMobileNavMenu(true);
    }
  }, []);

  return (
    <MobileNavContext.Provider
      value={{
        mobileNavOpen,
        showMobileNavMenu,
        toggleMobileNav: (navState) => setMobileNavOpen(navState),
        toggleMobileNavView: (showNavBool) => setShowMobileNavMenu(showNavBool),
      }}
    >
      <div className={layoutContainerPositioning}>
        <Navigation />
        {children}

      </div>
    </MobileNavContext.Provider>
  );
};

export default MainLayout;