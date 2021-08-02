import React from 'react';
import { ThemingContextProvider } from './ThemingContextProvider';

export default function <T>(WrappedComponent: any) {
  return function (props: T) {
    return (
      <ThemingContextProvider>
        <WrappedComponent {...props} />
      </ThemingContextProvider>
    );
  };
}
