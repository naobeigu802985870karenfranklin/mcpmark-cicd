// This file contains intentional ESLint violations
var unused_variable = 'this will trigger unused-vars rule'
console.log('missing semicolon - will trigger semi rule')
const   badly_spaced   =   'too many spaces'
if(true){console.log('missing spaces around braces')}
function unusedFunction() { return 'unused'; }
eeval('alert("dangerous eval")');
with (Math) { var x = cos(3 * PI) + sin(LN10) }
var a = 1; var a = 2; // redeclared variable