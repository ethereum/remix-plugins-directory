export interface VerifiedArtifacts {
  metadata: any
  contracts: any
}

export interface VerifyResponse {
  success: boolean,
  message: string
}

export interface SourceVerifyApi {
  methods: {
    fetch(address: string, network: string): VerifiedArtifacts
    verify(verifyData: any): VerifyResponse
  }
}
