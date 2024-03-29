import React, { useMemo } from 'react';
import { ethers } from 'ethers';
import { useSafeAppsSDK } from '@safe-global/safe-apps-react-sdk';
import { SafeAppProvider } from '@safe-global/safe-apps-provider';

function App() {
  const { sdk, safe } = useSafeAppsSDK();
  const web3Provider = useMemo(() => new ethers.providers.Web3Provider(new SafeAppProvider(safe, sdk)), [sdk, safe]);
  console.log(web3Provider);
  return (
    <div>
      My Safe App
    </div>
  );
};

export default App;