export type Staff = {
  id: number;
  name: string;
  age: number;
  email: string;
};

export type Response<T = any> = {
  data: T;
};
