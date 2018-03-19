import PropTypes from 'prop-types';
import { defaultProps, propTypes, mapDispatchToProps, mapStateToProps } from '../src/props';

test('defaultProps is set correctly', () => {
  expect(defaultProps).toEqual({
    reducerKey: 'navigationManager',
    animationDuration: 0,
  });
});

test('propTypes is set correctly', () => {
  expect(propTypes).toEqual({
    navigationIsAnimating: PropTypes.bool,
    navigationIsHidden: PropTypes.bool,
    toggleNavigation: PropTypes.func,
    children: PropTypes.any,
    reducerKey: PropTypes.string,
    animationDuration: PropTypes.number,
  });
});

test('mapDispatchToProps dispatches the appropriate action creator and maps it to a prop function', () => {
  const mockProps = { hasProperties: 'mockProps' };
  const mockDisplayNavigationAction = { hasProperties: 'mockDisplayNavigationAction' };
  const mockHideNavigationAction = { hasProperties: 'mockHideNavigationAction' };
  const mockReducerKey = 'mockReducerKey';
  const mockAnimationDuration = 10;
  const mockDisplayNavigationActionCreator = (reducerKey, animationDuration) => {
    expect(reducerKey).toEqual(mockReducerKey);
    expect(animationDuration).toEqual(mockAnimationDuration);
    return mockDisplayNavigationAction;
  };
  const mockHideNavigationActionCreator = (reducerKey, animationDuration) => {
    expect(reducerKey).toEqual(mockReducerKey);
    expect(animationDuration).toEqual(mockAnimationDuration);
    return mockHideNavigationAction;
  };
  const mockDispatch = (action) => action;
  const dispatchObject = mapDispatchToProps(mockDispatch, mockProps, mockDisplayNavigationActionCreator, mockHideNavigationActionCreator);
  expect(dispatchObject.toggleNavigation(true, true, mockAnimationDuration, mockReducerKey)).toBeNull();
  expect(dispatchObject.toggleNavigation(true, false, mockAnimationDuration, mockReducerKey)).toEqual(mockDisplayNavigationAction);
  expect(dispatchObject.toggleNavigation(false, false, mockAnimationDuration, mockReducerKey)).toEqual(mockHideNavigationAction);
});

test('mapStateToProps obtains state from selectors and passes them into props', () => {
  const mockReducerKey = 'mockReducerKey';
  const mockNavigationIsHidden = true;
  const mockNavigationIsAnimating = false;
  const mockState = { mockReducerKey: { isHidden: mockNavigationIsHidden, isAnimating: mockNavigationIsAnimating } };
  const mockProps = { reducerKey: mockReducerKey };
  const mockMakeSelectIsHidden = (reducerKey) => () => {
    expect(reducerKey).toEqual(mockReducerKey);
    return mockNavigationIsHidden;
  };
  const mockMakeSelectIsAnimating = (reducerKey) => () => {
    expect(reducerKey).toEqual(mockReducerKey);
    return mockNavigationIsAnimating;
  };
  expect(mapStateToProps(mockState, mockProps, mockMakeSelectIsHidden, mockMakeSelectIsAnimating)()).toEqual({
    navigationIsHidden: mockNavigationIsHidden,
    navigationIsAnimating: mockNavigationIsAnimating,
  });
});
