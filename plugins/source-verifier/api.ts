export interface VerifiedArtifacts {
  metadata: any
  contracts: any
}

export interface VerifyResult {
  match: 'partial' | 'perfect' | 'no match',
  success: boolean,
  message: string
}

export interface VerifyData {
  address: string,
  chain: string | number,
  files: Record<string, any> 
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
     * @param {verifyData} - map containing a metadata.json, source files, address and chain
     * @return {VerifyResponse}
     */
    verify(verifyData: VerifyData): VerifyResult
  }
}
