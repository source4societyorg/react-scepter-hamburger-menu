import PropTypes from 'prop-types';
import { valueOrDefault } from '@source4society/scepter-utility-lib';
import { createStructuredSelector } from 'reselect';
import { displayNavigation, hideNavigation, makeSelectIsHidden, makeSelectIsAnimating } from '@source4society/react-scepter-navigation-hoc';

export const defaultProps = {
  reducerKey: 'navigationManager',
  animationDuration: 0,
};
export const propTypes = {
  navigationIsAnimating: PropTypes.bool,
  navigationIsHidden: PropTypes.bool,
  toggleNavigation: PropTypes.func,
  children: PropTypes.any,
  reducerKey: PropTypes.string,
  animationDuration: PropTypes.number,
};
export const mapDispatchToProps = (dispatch, injectedDisplayNavigation, injectedHideNavigation) => {
  const displayNavigationActionCreater = valueOrDefault(injectedDisplayNavigation, displayNavigation);
  const hideNavigationActionCreater = valueOrDefault(injectedHideNavigation, hideNavigation);
  return {
    toggleNavigation: (navigationIsHidden, navigationIsAnimating, animationDuration, reducerKey) => {
      if (navigationIsAnimating) {
        return null;
      }
      if (navigationIsHidden) {
        return dispatch(displayNavigationActionCreater(reducerKey, animationDuration));
      }
      return dispatch(hideNavigationActionCreater(reducerKey, animationDuration));
    },
  };
};

export const mapStateToProps = (state, ownProps, injectedMakeSelectIsHidden, injectedMakeSelectIsAnimating) => {
  const makeSelectIsHiddenSelector = valueOrDefault(injectedMakeSelectIsHidden, makeSelectIsHidden);
  const makeSelectIsAnimatingSelector = valueOrDefault(injectedMakeSelectIsAnimating, makeSelectIsAnimating);
  return createStructuredSelector({
    navigationIsHidden: makeSelectIsHiddenSelector(ownProps.reducerKey),
    navigationIsAnimating: makeSelectIsAnimatingSelector(ownProps.reducerKey),
  });
};
