export interface NetworkApi {
  events: {
    networkChanged: (networkVersion: number) => void;
  }
  methods: {
    version(): number;
  }
}
