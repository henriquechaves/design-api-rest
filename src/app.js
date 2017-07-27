import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import database from './config/database'


const app = express();
// configurar o express e retornar uma nova instância de aplicação configurada.
const configExpress = () => {
    app.use(bodyParser.json());
    app.use('/', routes);

    return app;
}


// exportamos uma função que retorna uma Promise
export default () => database.connect().then(configExpress);

