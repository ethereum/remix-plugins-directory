export interface Network {
  name: 'ropsten' | 'mainnet' | 'rinkeby' | 'goerli'
  id: number  
}

export interface VerifiedArtifacts {
  metadata: any
  contracts: any
}

export interface SourceVerifyApi {
  methods: {
    fetch(address: string, network: Network): VerifiedArtifacts
    verify(verifyData: any): void
  }
}
