import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
    testEnvironment: 'jsdom',
    verbose: true,
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleNameMapper: {
        '^.+\\.module\\.scss$': '<rootDir>/mocks/styleModule.js',
    },
};

// eslint-disable-next-line import/no-default-export
export default config;
