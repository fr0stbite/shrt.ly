import InvalidUrlError from './InvalidUrlError';
import UnknownUrlError from './UnknownUrlError';

const createError = name => {
  switch (name) {
    case InvalidUrlError.error: {
      return new InvalidUrlError();
    }

    case UnknownUrlError.name: {
      return new UnknownUrlError();
    }

    default: {
      return new Error('An unexpected error has occurred.');
    }
  }
};

export default createError;
