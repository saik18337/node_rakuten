let crypto = require('crypto'); // CommonJS module system

let start = Date.now();

crypto.pbkdf2('secret123', 'saltvalue', 100000, 512, 'sha512', () => {
    console.log("#1", Date.now() - start);
});

crypto.pbkdf2('secret123', 'saltvalue', 100000, 512, 'sha512', () => {
    console.log("#2", Date.now() - start);
});

crypto.pbkdf2('secret123', 'saltvalue', 100000, 512, 'sha512', () => {
    console.log("#3", Date.now() - start);
});


crypto.pbkdf2('secret123', 'saltvalue', 100000, 512, 'sha512', () => {
    console.log("#4", Date.now() - start);
});


crypto.pbkdf2('secret123', 'saltvalue', 100000, 512, 'sha512', () => {
    console.log("#5", Date.now() - start);
});

