class InvalidUrlError extends Error {
  constructor() {
    super('The value you have entered is not a valid URL.');

    this.name = this.constructor.error;
  }
}

InvalidUrlError.error = 'InvalidUrlError';


export default InvalidUrlError;
