const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

module.exports = async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  // tear down handled by individual tests' afterAll or by a global afterAll if you prefer
  // but we export mongoServer reference if needed
  global.__MONGO_SERVER__ = mongoServer;
};
