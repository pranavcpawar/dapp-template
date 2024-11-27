import { ConnectWallet } from './components/ConnectWallet';

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-black p-2 text-white">
      <ConnectWallet />
      <div className="flex flex-1 flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-bold">Welcome to the dapp template</h1>
      </div>
    </div>
  );
}

export default App;
