import { useEffect, useState } from 'react';
import { BrowserWallet } from '@meshsdk/core';
import type { Wallet } from '@meshsdk/core';

export const useWalletListRaw = () => {
  const [wallets, setWallets] = useState<Wallet[]>([]);

  useEffect(() => {
    setWallets(BrowserWallet.getInstalledWalletsRaw());
  }, []);

  return wallets;
};
