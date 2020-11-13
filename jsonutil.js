const { Kind, print } = require('graphql/language');

function ensureObject(typeName, value) {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
        throw new TypeError(
            `${typeName} cannot represent non-object value: ${value}`,
        );
    }

    return value;
}
exports.ensureObject = ensureObject

function parseObject(typeName, ast, variables) {
    const value = Object.create(null);
    ast.fields.forEach((field) => {
        // eslint-disable-next-line no-use-before-define
        value[field.name.value] = parseLiteral(typeName, field.value, variables);
    });

    return value;
}
exports.parseObject = parseObject

function parseLiteral(typeName, ast, variables) {
    switch (ast.kind) {
        case Kind.STRING:
        case Kind.BOOLEAN:
            return ast.value;
        case Kind.INT:
        case Kind.FLOAT:
            return parseFloat(ast.value);
        case Kind.OBJECT:
            return parseObject(typeName, ast, variables);
        case Kind.LIST:
            return ast.values.map((n) => parseLiteral(typeName, n, variables));
        case Kind.NULL:
            return null;
        case Kind.VARIABLE:
            return variables ? variables[ast.name.value] : undefined;
        default:
            throw new TypeError(`${typeName} cannot represent value: ${print(ast)}`);
    }
}
exports.parseLiteral = parseLiteral
