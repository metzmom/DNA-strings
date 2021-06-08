let dna = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//a) Replace the gene "GCT" with "AGG", and then print the altered strand.
//dna.replace('GCT','AGG')
let dna1=dna.replace('GCT','AGG');
console.log(dna1)

//b) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".

if (dna1.indexOf('CAT') === -1) {
  console.log('CAT gene Not found');
} else {
 console.log('CAT gene found') 
}


//c) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.

console.log(dna1.slice(16,19));

//d) Use a template literal to print, "The DNA strand is ___ characters long."
//dna1.length;
let dna1Length = (dna1.length);
console.log(dna1Length);

console.log(`The DNA strand is ${dna1Length} characters long.`);


//e) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.


let dnaTaco = dna1.slice(4,7);
console.log(dnaTaco);
let dnaCat = dna1.slice(40,43);
console.log(dnaCat);
let dna2Taco = (`${dnaTaco}O ${dnaCat}`);
console.log(dna2Taco)
dna2Taco.toLowerCase();
