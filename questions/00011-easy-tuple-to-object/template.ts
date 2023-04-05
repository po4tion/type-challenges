type TupleToObject<T extends readonly (string | number)[]> = {
  [Property in T[number]]: Property
}
