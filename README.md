# react-scepter-hamburger-menu
Hamburger menu component for use with the scepter navigation HOC

[![scepter-logo](http://res.cloudinary.com/source-4-society/image/upload/v1519221119/scepter_hzpcqt.png)](https://github.com/source4societyorg/SCEPTER-core)

[![redux-logo](https://raw.githubusercontent.com/reactjs/redux/master/logo/logo-title-dark.png)](https://github.com/reactjs/redux)

[![react-boilerplate](https://github.com/react-boilerplate/brand/blob/master/assets/logo.png)](https://gihub.com/react-boilerplate)

[![airbnb-codestyle](https://camo.githubusercontent.com/1c5c800fbdabc79cfaca8c90dd47022a5b5c7486/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64652532307374796c652d616972626e622d627269676874677265656e2e7376673f7374796c653d666c61742d737175617265)](https://github.com/airbnb/javascript)

[![Build Status](https://travis-ci.org/source4societyorg/react-scepter-hamburger-menu.svg?branch=master)](https://travis-ci.org/source4societyorg/react-scepter-hamburger-menu)

[![codecov](https://codecov.io/gh/source4societyorg/react-scepter-hamburger-menu/branch/master/graph/badge.svg)](https://codecov.io/gh/source4societyorg/react-scepter-hamburger-menu)

# Installation

    npm install @source4society/react-scepter-hamburger-menu

or

    yarn install @source4society/react-scepter-hamburger-menu

# Usage

This component is intended to be used with [react-scepter-navigation-hoc](https://github.com/source4societyorg/react-scepter-navigation-hoc) and [react-scepter-navigation-menu](https://github.com/source4societyorg/react-scepter-navigation-menu). Decorating a component will allow it to become a toggle for the navigation menu component via the navigation manager by linking the three together via the reducerKey prop. 

# Example

First add the manager from [react-scepter-navigation-hoc](https://github.com/source4societyorg/react-scepter-navigation-hoc) somewhere to your app, such as the Shell.

    <NavigationManager reducerKey={'exampleKey'} />

Add a hamburger menu button and decorate it with this component

    <HamburgerMenu reducerKey={'exampleKey'}>
      <span className={'hamburger-icon'}></span>
    </HamburgerMenu>

Then add the Navigation component from [react-scepter-navigation-menu](https://github.com/source4societyorg/react-scepter-navigation-menu) to the page somewhere.

    <NavigationMenu reducerKey={'exampleKey'} />

Clicking on the hamburger icon will cause the navigation menu state for the 'exampleKey' navigation to be toggled according to the states defined in [react-scepter-navigation-hoc](https://github.com/source4societyorg/react-scepter-navigation-hoc).