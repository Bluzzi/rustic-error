# Rustic Error
Robust and type-safe error management inspired by Rust's Result pattern.

## Example
```ts
import type { Result } from "rustic-error";
import { ok, error } from "rustic-error"; 

function divide(a: number, b: number): Result<number, string> {
  if (b === 0) return error("Division by zero");

  return ok(a / b);
}

const foo = divide(1 / 2);

if (foo.ok) {
  console.log("Result", foo.value);
} else {
  console.log("Error", foo.error);
}
```