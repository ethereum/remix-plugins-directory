export interface VerifiedArtifacts {
  metadata: any
  contracts: any
}

export interface SourceVerifyApi {
  methods: {
    fetch(address: string, network: string): VerifiedArtifacts
    verify(verifyData: any): void //TODO: should this return success/error?
  }
}
