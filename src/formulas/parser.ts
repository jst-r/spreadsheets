import { grammar } from "ohm-js";

import formulaGrammarSource from "./grammar.ohm?raw";

const formulaGrammar = grammar(formulaGrammarSource);

const semantics = formulaGrammar.createSemantics();

semantics.addOperation("eval", {
    AddExp_plus(a, _, b) {
        return a.eval() + b.eval();
    },
    AddExp_minus(a, _, b) {
        return a.eval() - b.eval();
    },
    MulExp_multiply(a, _, b) {
        return a.eval() * b.eval();
    },
    MulExp_divide(a, _, b) {
        return a.eval() / b.eval();
    },
    number(digits) {
        return Number.parseFloat(digits.sourceString);
    }
})

function evaluate(source: string) {
    return semantics(formulaGrammar.match(source)).eval()
}

console.log(evaluate("42"));
console.log(evaluate("1 + 2"));
console.log(evaluate("1 + 2 - 3 + 4"));
console.log(evaluate("1 + 2 * 3"));
console.log(evaluate("1 + 2 * 3 / 4"));


export { };