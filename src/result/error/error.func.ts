import type { Result } from "#/typing/result";

export function error<T, E>(error: E): Result<T, E> {
  return { ok: false, error };
}