class UnknownUrlError extends Error {
  constructor() {
    super('No URL with the specified ID exists.');

    this.name = 'UnknownUrlError';
  }
}

export default UnknownUrlError;
