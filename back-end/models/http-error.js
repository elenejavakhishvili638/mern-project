class HttpError extends Error {
  constructor(message, errorCode) {
    //exccess to Error constuctor
    super(message);
    this.code = errorCode;
  }
}

module.exports = HttpError;
