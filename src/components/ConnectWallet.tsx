import { ConnectButton } from '@rainbow-me/rainbowkit';
export const ConnectWallet = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}>
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal} type="button">
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }
              return (
                <div className="font-parkinsans flex flex-row items-center gap-2">
                  <button
                    className="flex items-center justify-center gap-2 rounded-md bg-[#181818] p-2"
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button">
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 24,
                          height: 24,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}>
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 24, height: 24 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <div
                    className="flex cursor-pointer items-start justify-center gap-2 rounded-md bg-[#181818] p-2"
                    onClick={openAccountModal}>
                    <h3>{account.displayName}</h3>
                    <h3 className="text-[#0A67C2]">{account.displayBalance}</h3>
                  </div>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
