import { NetworkProvider, Network, CustomNetwork } from './type';

/** @deprecated: current version in Remix IDE. To improve to match standard JSON RPC methods */
export interface NetworkApi {
  events: {
    providerChanged: (provider: NetworkProvider) => void
  }
  methods: {
    getNetworkProvider(): NetworkProvider
    detectNetwork(): Network | Partial<CustomNetwork>
    getEndpoint(): string
    addNetwork(network: CustomNetwork): void
    removeNetwork(name: string): void
  }
}

/** Work In Progress: API that describes the network api */
export interface NextNetworkApi {
  events: {
    networkChanged: (networkVersion: number) => void;
  }
  methods: {
    /// NETWORK
    /** The ID of the current network */
    getNetwork(): number;

    /// ACCOUNT
    /** Get the amount of wei of the account with the provided address */
    getBalance(address: string): string;
    /** Get the amount of transaction exectuted by the account */
    getTransactionCount(address: string): number;
  
    /// Blockchain
    /** The current blockNumber */
    getBlockNumber(): number;
    /** The estimation of the current gas price on the network */
    getGasPrice(): string;
    /** Get the block at a hash or number */
    getBlock(hash: string);
    getBlock(blockNumber: number);
    /** Get a transaction by its hash */
    getTransaction(hash: string);
    /** Get a transaction receipt by its hash */
    getTransactionReceipt(hash: string);

    /// CONTRACT
    /** Send a read-only transaction to the network */
    call(transaction): string;
    /** Gives an estimation of the amount of gas needed for a transaction */
    estimateGas(transaction): string;
    /** Send a signed transaction to the network */
    sendTransaction(signedTransaction);
  }
}
