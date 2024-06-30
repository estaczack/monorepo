function sanitizeInput() {
    let sanitizedArguments = [];
    [...arguments].forEach((arg) =>  {
        sanitizedArguments.push(arg
            .replace(/\\/g, "\\\\")
            .replace(/'/g, "''")
            .replace(/"/g, '""')
        )
    });
    return sanitizedArguments;
}

module.exports = sanitizeInput