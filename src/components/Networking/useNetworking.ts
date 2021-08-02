import React from 'react';
import { NetworkingContext } from './NetworkingProvider';

export default function () {
  const { setApiToken, apiToken } = React.useContext(NetworkingContext);

  return {
    setApiToken,
    apiToken,
  };
}
