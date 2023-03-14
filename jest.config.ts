import {JestConfigWithTsJest, pathsToModuleNameMapper} from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  // it cannot import tsconfig.json file. nooooooooooooooo
  modulePaths: ['.'],
  moduleNameMapper: pathsToModuleNameMapper({'@/*': ['*']}),
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
};

export default jestConfig;
