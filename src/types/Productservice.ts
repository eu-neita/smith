export type ProductResponseFail = {
  status: number;
  data: {
    message: string;
  }
};

export type ProductResponseSuccessfull<T> = {
  status: 201;
  data: T
};

export type ProductServiceResponse<T> = ProductResponseSuccessfull<T> | ProductResponseFail;