import { afterEach, describe, expect, it, vi } from "vitest";
import { submitToWeb3Forms } from "../web3forms";

describe("submitToWeb3Forms", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns true when the request succeeds", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true }));
    const result = await submitToWeb3Forms(new FormData());
    expect(result).toBe(true);
  });

  it("returns false when the request fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));
    const result = await submitToWeb3Forms(new FormData());
    expect(result).toBe(false);
  });

  it("returns false when fetch throws", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network error")));
    const result = await submitToWeb3Forms(new FormData());
    expect(result).toBe(false);
  });
});
