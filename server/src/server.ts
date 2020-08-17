import express from 'express';
import cors from 'cors';
import routes from './routes';
  //GET: Busca ou lista uma informação
   //POST: Cria alguma informação
   //PUT: Atualiza uma informação
   //DELETE: Deleta  uma informação salva

   //Corpo (Request Body): Dados para criação ou atualização de um registro
   //Route Params: Identificar qual recurso eu quero atualizar ou deletar
   //Query Params:  Paginação, filtro, ordenação
  
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(routes);
  app.listen(3333);
  
  