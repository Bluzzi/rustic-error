import { it, describe } from "vitest";
import { ok, error } from "#/result";
import { assertResultify } from "./resultify.util";

describe("resultify", () => {
  it("should return ok result when function resolves with a value", async() => {
    const fn = (): number => 42;
    const expected = ok<number, Error>(42);

    await assertResultify(fn, expected);
  });

  it("should return error result when function throws an Error", async() => {
    const fn = (): void => {
      throw Error("Something went wrong");
    };
    const expected = error(Error("Something went wrong"));

    await assertResultify(fn, expected);
  });

  it("should return error result with custom error message when function throws a string", async() => {
    const fn = (): void => {
      throw "Custom error";
    };
    const expected = error(Error("Custom error"));

    await assertResultify(fn, expected);
  });

  it("should return error result with JSON string when function throws an object", async() => {
    const fn = (): void => {
      throw { message: "Custom error", code: 123 };
    };
    const expected = error(Error("{\"message\":\"Custom error\",\"code\":123}"));

    await assertResultify(fn, expected);
  });

  // TODO: not sure about this behaviour
  it("should return error result when function returns falsy value", async() => {
    const fn = (): boolean => false;
    const expected = error(Error("The boolean value returns false"));

    await assertResultify(fn, expected);
  });

  it("should return ok result when async function resolves with a value", async() => {
    const fn = async(): Promise<number> => {
      return Promise.resolve(42);
    };
    const expected = ok<number, Error>(42);

    await assertResultify(fn, expected);
  });
});