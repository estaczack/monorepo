const sanitizeInput = require('../utils/InputSanitization');

const result1 = sanitizeInput();
console.log(result1);

const result2 = sanitizeInput('hello');
console.log(result2);

const result3 = sanitizeInput("Aria's password");
console.log(result3);

const result4 = sanitizeInput('"quote"');
console.log(result4);

const result5 = sanitizeInput('Aria', "Aria's password", '"secret"');
console.log(result5);

const result6 = sanitizeInput("Some random \\ input with \\ backslash");
console.log(result6);
