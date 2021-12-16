import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

/**
 * Ref: https://reactnavigation.org/docs/navigating-without-navigation-prop/
 * How to use navigation.navigate from a component outside the stack.navigation
 */
