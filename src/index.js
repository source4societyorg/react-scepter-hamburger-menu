import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { propTypes, defaultProps, mapStateToProps, mapDispatchToProps } from './props';

export class HamburgerMenu extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { navigationIsHidden, navigationIsAnimating, reducerKey, animationDuration, toggleNavigation } = this.props;
    const clickHandler = (evt) => { evt.preventDefault(); return toggleNavigation(navigationIsHidden, navigationIsAnimating, animationDuration, reducerKey); };
    return <children onClick={clickHandler} navigationIsHidden={navigationIsHidden} navigationIsAnimating={navigationIsAnimating} reducerKey={reducerKey} animationDuration={animationDuration} />;
  }
}

export const withConnect = connect(mapStateToProps, mapDispatchToProps);
HamburgerMenu.defaultProps = defaultProps;
HamburgerMenu.propTypes = propTypes;
export default compose(
  withConnect,
)(HamburgerMenu);
