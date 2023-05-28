export type Result<T, E> = ResultOk<T> | ResultFail<E>;

type ResultOk<T> = {
  ok: true;
  value: T;
}

type ResultFail<E> = {
  ok: false;
  error: E;
}