const mongoose = require('mongoose');

const connectDB = async () => {
  try {
      await mongoose.connect("mongodb+srv://anuja_0109:VWSkZf4K8XBElRnb@cluster0.jbxnm.mongodb.net/mean-test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
      console.log("Mongo Db Connected");
  } catch (error) {
      console.log("Not connected");
  }
}

module.exports = connectDB;
