import { Octokit } from "@octokit/core";

import { test } from "../src";

describe("Smoke test", () => {
  it("{ test } export is a function", () => {
    expect(test).toBeInstanceOf(Function);
  });

  it("test.VERSION is set", () => {
    expect(test.VERSION).toEqual("0.0.0-development");
  });

  it("Loads plugin", () => {
    expect(() => {
      const TestOctokit = Octokit.plugin(test);
      new TestOctokit();
    }).not.toThrow();
  });
});
