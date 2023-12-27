class ApiError {
  constructor(public code: number, public message: string) {
    this.code = code
    this.message = message
  }
  static badRequest(code: number, msg: string) {
    return new ApiError(code, msg)
  }
  static internal(msg: string) {
    return new ApiError(500, msg)
  }
}

export default ApiError
