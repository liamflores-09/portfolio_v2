import { beforeEach, describe, expect, it } from "vitest";
import { getStoredTheme, oppositeTheme, resolveInitialTheme, setStoredTheme } from "../theme";

describe("theme", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns null when nothing is stored", () => {
    expect(getStoredTheme()).toBeNull();
  });

  it("returns the stored value when valid", () => {
    localStorage.setItem("theme", "dark");
    expect(getStoredTheme()).toBe("dark");
  });

  it("ignores invalid stored values", () => {
    localStorage.setItem("theme", "blue");
    expect(getStoredTheme()).toBeNull();
  });

  it("defaults to light when nothing is stored", () => {
    expect(resolveInitialTheme()).toBe("light");
  });

  it("resolves to the stored theme when present", () => {
    setStoredTheme("dark");
    expect(resolveInitialTheme()).toBe("dark");
  });

  it("flips light and dark", () => {
    expect(oppositeTheme("light")).toBe("dark");
    expect(oppositeTheme("dark")).toBe("light");
  });
});
