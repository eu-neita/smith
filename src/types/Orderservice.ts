export type OrderResponseFail = {
  status: number;
  data: {
    message: string;
  }
};

export type OrderResponseSuccessfullGet<T> = {
  status: 200;
  data: T
};

export type OrderServiceResponse<T> =
| OrderResponseFail | OrderResponseSuccessfullGet<T>;