export interface VerifiedArtifacts {
  metadata: any
  contracts: any
}

export interface VerifyResponse {
  success: boolean,
  message: string
}

// network should be either network name or network id; both number and string types are accepted
export interface SourceVerifyApi {
  methods: {
    fetch(address: string, network: string | number): VerifiedArtifacts
    verify(verifyData: any): VerifyResponse
  }
}
