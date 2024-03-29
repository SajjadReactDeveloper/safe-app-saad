import React, { useMemo } from 'react';
import { ethers } from 'ethers';
import { SafeProvider, useSafeAppsSDK } from '@safe-global/safe-apps-react-sdk';
import { SafeAppProvider } from '@safe-global/safe-apps-provider';

function App() {
  // This component now uses the useSafeAppsSDK hook within the SafeProvider context
  const { sdk, safe } = useSafeAppsSDK();
  const web3Provider = useMemo(() => new ethers.providers.Web3Provider(new SafeAppProvider(safe, sdk)), [sdk, safe]);
  console.log(web3Provider);
  // use web3Provider with contracts here
  // ...

  return (
    <div>
      My Safe App
    </div>
  );
};

export default App;