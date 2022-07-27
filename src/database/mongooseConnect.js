const DATABASE_URI =
  "mongodb+srv://piresnilva:sofmeL2012@cluster0.7rbouil.mongodb.net/trissomia";

  const mongoose = require("mongoose")
  
const connect = async () => {
  try {
    await mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("banco conectado!");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  connect,
};
