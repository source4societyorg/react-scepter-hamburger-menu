import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import { HamburgerMenu } from '../src/index';

test('HamburgerMenu will render without issues', () => {
  const mockNavigationIsHidden = true;
  const mockNavigationIsAnimating = false;
  const mockReducerKey = 'mockReducerKey';
  const mockAnimationDuration = 10;
  const mockComponent = ({ navigationIsHidden, navigationIsAnimating, reducerKey }) => <div>{reducerKey}: IsHidden={navigationIsHidden} isAnimating={navigationIsAnimating}</div>;
  mockComponent.propTypes = {
    navigationIsAnimating: PropTypes.bool,
    navigationIsHidden: PropTypes.bool,
    reducerKey: PropTypes.string,
  };
  const mockToggleNavigation = (navigationIsHidden, navigationIsAnimating, animationDuration, reducerKey) => {
    expect(navigationIsHidden).toEqual(mockNavigationIsHidden);
    expect(navigationIsAnimating).toEqual(mockNavigationIsAnimating);
    expect(animationDuration).toEqual(mockAnimationDuration);
    expect(reducerKey).toEqual(mockReducerKey);
    return true;
  };
  const componentToRender = shallow(
    <HamburgerMenu
      toggleNavigation={mockToggleNavigation}
      navigationIsHidden={mockNavigationIsHidden}
      navigationIsAnimating={mockNavigationIsAnimating}
      reducerKey={mockReducerKey}
      animationDuration={mockAnimationDuration}
    >
      <mockComponent />
    </HamburgerMenu>
  );
  componentToRender.simulate('interaction', { preventDefault: () => null });
});
