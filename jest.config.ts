module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/test/**/filter.ts'],
    moduleDirectories: ['node_modules', 'src'],
};