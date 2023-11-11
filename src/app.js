import express from "express";
import conectaNaDataBase from "./config/dbconnect.js"
import routes from "./routes/index.js";
const conexao = await conectaNaDataBase();

conexao.on("error", (error)=>{
    console.error("erro de conexao", error);
});

conexao.once("open", () =>{
    console.log("conexao feita com sucesso!")
});
const app = express();
routes(app);


export default app;