import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import database from './config/database'


// configurar o express e retornar uma nova instância de aplicação configurada.
const configExpress = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use('/', routes);

    return app;
}


// exportamos uma função que retorna uma Promise
export default () => database.connect().then(configExpress);;