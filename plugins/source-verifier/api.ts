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
  files: Record<string, string> 
}

export interface SourceVerifyApi {
  methods: {
    /**
     * Fetch contract metadata and source files. Network is the one from Remix
     * @param {string} address - contract address.
     * @return {VerifiedArtifacts} - map containing a metadata.json and source files.
     */
    fetch(address: string): VerifiedArtifacts
    
     /**
     * Fetch contract metadata and source files and save them to Remix's local storage.
     * @param {string} address - contract address.
     * @param {string | number} network - should be either network name or network id; both number and string types are accepted.
     * @return {VerifiedArtifacts} - map containing a metadata.json and source files.
     */
    fetchAndSave(address: string, chain: any)

    /**
     * Fetch contract metadata and source files by providing custom network.
     * @param {string} address - contract address.
     * @param {string | number} network - should be either network name or network id; both number and string types are accepted.
     * @return {VerifiedArtifacts} - map containing a metadata.json and source files.
     */
    fetchByNetwork(address: string, chain: any): VerifiedArtifacts
    
     /**
     * Verify a contract. the network is retrieved from the application context.
     * @param {address} - address of the contract
     * @param {files} - map containing a metadata.json and source files
     * @return {VerifyResult}
     */
    verify(address: string, files: any): VerifyResult
    
    /**
     * verify a contract. 
     * @param {verifyData} - map containing a metadata.json, source files, address and chain
     * @return {VerifyResult}
     */
    verifyByNetwork(verifyData: VerifyData): VerifyResult
    
  }
}
