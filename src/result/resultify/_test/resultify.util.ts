import type { MaybePromise } from "#/typing/promise";
import type { Result } from "#/typing/result";
import { expect, assert } from "vitest";
import { resultify } from "../resultify.func";

export function assertResultEquals<T, E>(result: Result<T, E>, expected: Result<T, Error>): void {
  if (expected.ok) {
    assert(result.ok);
    expect(result.value).toEqual(expected.value);
  } else {
    assert(!result.ok);
    assert(result.error instanceof Error);
    expect(result.error.message).toBe(expected.error.message);
  }
}

export async function assertResultify<T>(fn: () => MaybePromise<T>, expected: Result<T, Error>): Promise<void> {
  const result = await resultify(() => fn());

  assertResultEquals(result, expected);
}