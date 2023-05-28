import { assert, describe, expect, it } from "vitest";
import { ok } from "./ok.func";

describe("ok function", () => {
  it("should create a Result with ok status and correct value", () => {
    const result = ok<number, string>(42);

    assert(result.ok);
    expect(result.value).toBe(42);
  });

  it("should create a Result with ok status and correct value of a different type", () => {
    const result = ok<string, number>("Hello World!");

    assert(result.ok);
    expect(result.value).toBe("Hello World!");
  });

  it("should create a Result with ok status and an object value", () => {
    const user = { id: 1, name: "John Doe" };
    const result = ok<{ id: number; name: string }, string>(user);

    assert(result.ok);
    expect(result.value).toBe(user);
  });
});