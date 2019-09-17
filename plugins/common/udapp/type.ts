/** @deprecated: current version in Remix IDE. To improve to match standard JSON RPC methods */
export interface RemixTx {
  from: string
  to: string
  gasLimit: string
  data: string
  value: string
  useCall: boolean
}

/** @deprecated: current version in Remix IDE. To improve to match standard JSON RPC methods */
export interface RemixTxReceipt {
  transactionHash: string
  status: 0 | 1
  gasUsed: string
  error: string
  return: string
  createdAddress?: string
}

/** @deprecated: current version in Remix IDE. To improve to match standard JSON RPC methods */
export interface VMAccount {
  privateKey: string
  balance: string
}