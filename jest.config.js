module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest-setup.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
