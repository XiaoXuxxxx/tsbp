import type { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const jestConfig: Config = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest'
  },
  modulePaths: ['.'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  modulePathIgnorePatterns: ['<rootDir>/dist/']
};

export default jestConfig;
