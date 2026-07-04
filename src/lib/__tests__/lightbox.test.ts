import { describe, expect, it } from "vitest";
import { nextIndex, prevIndex } from "../lightbox";

describe("lightbox index math", () => {
  it("wraps forward past the last index", () => {
    expect(nextIndex(2, 3)).toBe(0);
  });

  it("advances forward within range", () => {
    expect(nextIndex(0, 3)).toBe(1);
  });

  it("wraps backward before the first index", () => {
    expect(prevIndex(0, 3)).toBe(2);
  });

  it("goes backward within range", () => {
    expect(prevIndex(2, 3)).toBe(1);
  });
});
