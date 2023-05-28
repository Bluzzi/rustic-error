import type { Result } from "#/typing/result";

export function ok<T, E>(value: T): Result<T, E> {
  return { ok: true, value };
}