const ValidateEmail = require('../login/ValidateEmail');

function testValidEmails() {
    const validEmails = [
        'test@example.com',
        'test.middle@example.com.br',
        'test@subdomain.domain.tld'
    ];

    validEmails.forEach((email) => {
        if (!ValidateEmail(email)) {
            console.error(`Failed for ${email}`);
        }
    });
}

function testInvalidEmails() {
    const invalidEmails = [
        'test@example',
        'test.example.com',
        'test.@example.com',
        '.test@example.com',
        'test@-example.com',
        'test@example-.com',
        'test@example..com',
        'test@example.c',
        'test@localhost.',
        '@example.com',
        'test@',
        '',
        null,
        undefined
    ];

    invalidEmails.forEach((email) => {
        if (ValidateEmail(email)) {
            console.error(`Failed for ${email}`);
        }
    });
}

testValidEmails();
testInvalidEmails();
