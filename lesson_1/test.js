const fileLines = [
    'Inspector Algar,Inspector Bardle,Mr. Barker,Inspector Barton',
    'Inspector Baynes,Inspector Bradstreet,Inspector Sam Brown',
    'Monsieur Dubugue,Birdy Edwards,Inspector Forbes,Inspector Forrester',
    'Inspector Gregory,Inspector Tobias Gregson,Inspector Hill',
    'Inspector Stanley Hopkins,Inspector Athelney Jones'
];

let pass = 1;

function splitLineReducer(acc, line) {
    pass += 1;
    console.log(pass);
    return acc.concat(line.split(/,/g));
}
const investigators = fileLines.reduce(splitLineReducer, []);

console.log(investigators);
// ⦘ [
//   "Inspector Algar",
//   "Inspector Bardle",
//   "Mr. Barker",
//   "Inspector Barton",
//   "Inspector Baynes",
//   "Inspector Bradstreet",
//   "Inspector Sam Brown",
//   "Monsieur Dubugue",
//   "Birdy Edwards",
//   "Inspector Forbes",
//   "Inspector Forrester",
//   "Inspector Gregory",
//   "Inspector Tobias Gregson",
//   "Inspector Hill",
//   "Inspector Stanley Hopkins",
//   "Inspector Athelney Jones"
// ]