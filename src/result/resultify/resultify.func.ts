import type { MaybePromise } from "#/typing/promise";
import type { Result } from "#/typing/result";
import { ok, error } from "#/result";

export async function resultify<T>(fn: (...params: unknown[]) => MaybePromise<T>): Promise<Result<T, Error>> {
  try {
    const result = await fn();

    if (!result) return error(Error("The boolean value returns false"));

    return ok(result);
  } catch (err) {
    if (err instanceof Error) return error(err);
    if (err instanceof Object) return error(Error(JSON.stringify(err)));

    return error(Error(String(err)));
  }
}