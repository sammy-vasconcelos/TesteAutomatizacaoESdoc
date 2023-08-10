import express from 'express'
import dotenv from 'dotenv'
import connectionDB from './database/index.js';
import  router  from "./router/router.js";
import exempleRouter from './router/exemple.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectionDB();
app.use('/api', router);
app.use("/test", exempleRouter)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});