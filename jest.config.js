module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./enzyme-setup.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
