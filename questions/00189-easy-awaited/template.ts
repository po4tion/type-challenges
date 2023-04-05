type MyAwaited<T extends Promise<any> | PromiseLike<any>> = T extends Promise<
  infer U
>
  ? U extends Promise<any>
    ? MyAwaited<U>
    : U
  : T extends { then(onfulfilled: (arg: infer K) => any): any }
  ? K
  : never
