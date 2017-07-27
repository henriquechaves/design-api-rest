import ProductsController from '../../../src/controllers/products';
import sinon from 'sinon';

describe('Controllers: Products', () => {

    // Armazena um array com um objeto referente a um produto com informações estáticas.
    const defaultProduct = [{
        name: 'Default product',
        description: 'product description',
        price: 100
    }]


    describe('get() products', () => {
        it('should return a list of products', () => {

            // Fake da requisição da requisição enviada pela rota do express,
            const request = {};

            //é um objeto fake da resposta enviada pela rota do express
            const response = {
                //spies permitem gravar informações como quantas vezes uma função foi chamada
                send: sinon.spy()
            };

            const productsController = new ProductsController();
            // chama o método get do controller passando os objetos request e response
            productsController.get(request, response);

            //verificar se o método get está chamando a função send com o defaultProduct como parâmetro
            expect(response.send.called).to.be.true;
            expect(response.send.calledWith(defaultProduct)).to.be.true;
        });
    });
});