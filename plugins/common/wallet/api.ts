export interface WalletApi {
  events: {
    accountsChanged: (accounts: string[]) => void
  }
  methods: {
    getAccounts(): string[];
  }
}