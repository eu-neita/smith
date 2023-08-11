export type OrderResponseFail = {
  status: number;
  data: {
    message: string;
  }
};

export type OrderResponseSuccessfull<T> = {
  status: 200;
  data: T
};

export type OrderServiceResponse<T> = OrderResponseSuccessfull<T> | OrderResponseFail;