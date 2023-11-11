import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required:true},
    editora: {type: String},
    preco: {type: Number}
}, {versionKey: false});

const livro = mongoose.model("livro", livroSchema);

export default livro;