module.exports = {
    // other configurations
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    testEnvironment: "jsdom",
};
