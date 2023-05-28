import { assert, describe, expect, it } from "vitest";
import { error } from "../result.func";

describe("error function", () => {
  it("should create a Result with error status and correct error value", () => {
    const result = error<number, string>("Error message");

    assert(!result.ok);
    expect(result.error).toBe("Error message");
  });

  it("should create a Result with error status and correct error value of a different type", () => {
    const result = error<string, number>(42);

    assert(!result.ok);
    expect(result.error).toBe(42);
  });

  it("should create a Result with error status and an object error value", () => {
    const err = { code: 500, message: "Internal Server Error" };
    const result = error<string, { code: number; message: string }>(err);

    assert(!result.ok);
    expect(result.error).toBe(err);
  });
});