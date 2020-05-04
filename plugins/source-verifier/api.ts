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
    /**
     * Fetch contract metadata and source files.
     * @param {string} address - contract address.
     * @param {string | number} network - should be either network name or network id; both number and string types are accepted.
     * @return {VerifiedArtifacts} - map containing a metadata.json and source files.
     */
    fetch(address: string, network: string | number): VerifiedArtifacts
    /**
     * verify a contract. the network is retrieved from the application context.
     * @param {verifyData} any - contract address.
     * @return {VerifyResponse}
     */
    verify(verifyData: any): VerifyResponse
  }
}
