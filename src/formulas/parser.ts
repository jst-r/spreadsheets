import { grammar } from "ohm-js";

import formulaGrammarSource from "./grammar.ohm?raw";

const formulaParser = grammar(formulaGrammarSource);

console.log(formulaParser.match('42').succeeded())
console.log(formulaParser.match('1 + 2').succeeded())

export { };