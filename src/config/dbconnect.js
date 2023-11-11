import mongoose, { mongo } from "mongoose";


async function conectaNaDataBase(){
    mongoose.connect("mongodb+srv://mailonnunes:familia1212@cluster0.o52hdpt.mongodb.net/livraria?retryWrites=true&w=majority");

    return mongoose.connection;

};

export default conectaNaDataBase;



