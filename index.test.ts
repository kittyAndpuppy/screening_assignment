import { describe, expect, test } from "@jest/globals";
import { first, second } from "./index";
import words from "./part1.json";
import messages from "./part2.json";

describe("assessment", () => {
  test("can sort words using a loop", () => {
    //create test for function
    expect(first(words)).toBe("doe");
  });
  test("can return latest messages of every user", () => {
    //create test for function
    expect(second(messages)).toStrictEqual([
      "latest message from user 1",
      "latest message from user 2",
      "latest message from user 3",
      "latest message from user 4",
    ]);
  });
});
