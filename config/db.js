const mongoose		= require("mongoose")

const connectDB = async () => {
	await mongoose.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true, //Formato nuevo de MONGODB
		useUnifiedTopology: true
	})

	console.log("Base de datos conectada")

}

module.exports = connectDB