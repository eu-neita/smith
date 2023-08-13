export type UserResponseFail = {
  status: number;
  data: {
    message: string;
  }
};

export type UserResponseSuccessfull<T> = {
  status: 201;
  data: T
};

export type UserResponseSuccessfullGet<T> = {
  status: 200;
  data: T
};

export type UserServiceResponse<T> = UserResponseSuccessfull<T> 
| UserResponseFail | UserResponseSuccessfullGet<T>;