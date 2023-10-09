/**
 * Verifica se o ambiente é de produção e
 * carrega as variáveis de ambiente do arquivo .env caso não seja
 */
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
// Configura cors na aplicação
const cors = require("cors");
const MongooseConnection = require("./infra/mongoose");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

// Atribui o caminho à rota
app.use("/", routes);

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

// Configura a conexão com a base de dados
MongooseConnection(db_url, db_user, db_pass, db_data);

module.exports = app;
