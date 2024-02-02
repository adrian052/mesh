import { useContext, useEffect, useState } from 'react';
import { WalletContext } from '@mesh/contexts';
import type { Asset } from '@meshsdk/core';

export const useAssets = () => {
  const [assets, setAssets] = useState<Asset[]>();
  const { hasConnectedWallet, connectedWalletName, connectedWalletInstance } =
    useContext(WalletContext);

  useEffect(() => {
    if (hasConnectedWallet) {
      connectedWalletInstance.getAssets().then(setAssets);
    }
  }, [connectedWalletName]);

  return assets;
};
