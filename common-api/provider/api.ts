export interface ProviderApi {
  methods: {
    sendAsync(method: string, parameters: string[]): any
  }
}
