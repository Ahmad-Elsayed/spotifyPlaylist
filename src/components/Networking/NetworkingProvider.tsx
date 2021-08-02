import React, { createContext, useState } from 'react';
import { NetworkContext } from '../../types';

const NetworkingContext = createContext<NetworkContext>({
  apiToken: '',
  setApiToken: () => {},
});

function NetworkingContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [token, setToken] = useState('');

  function setApiToken(apiToken: string) {
    setToken(apiToken);
  }

  return (
    <NetworkingContext.Provider value={{ setApiToken, apiToken: token }}>
      {children}
    </NetworkingContext.Provider>
  );
}

export { NetworkingContextProvider, NetworkingContext };
