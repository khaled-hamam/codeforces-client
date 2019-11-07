enum ResponseStatus {
  OK = 'OK',
  FAILED = 'FAILED',
}

export type ApiResponse<U> =
  | {
      status: ResponseStatus.OK;
      result: U;
    }
  | {
      status: ResponseStatus.FAILED;
      comment: string;
    };
