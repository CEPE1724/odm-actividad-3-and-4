import mongoose from "mongoose";

const connection = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/bd-ecommerce";
        await mongoose.connect(mongoUri);
        console.log("Se ha conectado a la bdd bd-ecommerce");
    } catch (error) {
        console.log(error);
        throw new Error("No se ha podido establecer la conexion a la bdd");
    }
};

export default connection;