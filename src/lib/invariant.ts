export function invariant(
  condition: unknown,
  message = "The invariant condition is not met"
): void {
  if (!condition) {
    throw new Error(message);
  }
}
