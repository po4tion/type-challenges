type IsPromise<P> = P extends Promise<infer K> ? IsPromise<K> : P

type MyAwaited<T extends Promise<any> | PromiseLike<any>> = T extends Promise<
  infer P
>
  ? IsPromise<P>
  : T extends { then: (onfulfilled: (arg: infer K) => any) => any }
  ? K
  : never
