import { describe, it, expect, test } from "vitest"

import { evaluate } from "./formula";

describe(
    "Arithmetic", () => {
        it.each([
            ["1 + 2", 3],
            ["1 - 2", - 1],
            ["1 + 2 - 3", 0],
            ["1 * 1", 1],
            ["1 * 2", 2],
            ["1 / 2", 0.5],
            ["4 / 2", 2]
        ])("%s = %d", (source, expectedRes) => { expect(evaluate(source)).eq(expectedRes) })
    }
)

describe("Precedence", () => {
    it.each([
        ["1 * 2 + 3", 5],
        ["1 + 2 * 3", 7],
        ["4 / 2 + 3 * 2", 8]
    ])("%s = %d", (source, expectedRes) => { expect(evaluate(source)).eq(expectedRes) })
})