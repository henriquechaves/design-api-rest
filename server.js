import setupApp from './src/app';

// temos uma função que retorna uma promise devemos chamá-la e ela vai inicializar o app, inicializando o banco, configurando o
// express e retornando uma nova instância da aplicação, só então será possível inicializar a aplicação
// chamando o listen.
setupApp()
    .then(app => app.listen(port, () => console.log(`app running on port ${port}`)
    ))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });