const networkInfo: {
  chainID: number;
  name: string;
  rpc: string;
}[] = [
  {
    chainID: 1,
    name: "Ethereum Mainnet",
    rpc: `https://eth.llamarpc.com`,
  },
  {
    chainID: 5,
    name: "Goerli Testnet",
    rpc: `https://eth-goerli.public.blastapi.io`,
  },
];

export default networkInfo;
