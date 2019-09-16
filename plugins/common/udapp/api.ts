import { RemixTx, RemixTxReceipt, VMAccount } from './type'

/** @deprecated: current version in Remix IDE. To improve to match standard JSON RPC methods */
export interface UdappApi {
  events: {
    newTransaction: (transaction: RemixTx) => void
  }
  methods: {
    sendTransaction(tx: RemixTx): RemixTxReceipt
    getAccounts(): string[]
    createVMAccount(vmAccount: VMAccount): string
  }
}
