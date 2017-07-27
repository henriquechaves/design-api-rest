describe('Routes: Products', () => {

    //let para o request do supertest e no before a aplicação é inicializada.
    let request;

    before(() => {
        return setupApp()
            .then(app => {
                request = supertest(app)
            })
    });

    // Armazena um array com um objeto referente a um produto com informações estáticas.
    const defaultProduct = {
        name: 'Default product',
        description: 'product description',
        price: 100
    };



    describe('GET /products', () => {
        it('should return a list of products', done => {

            request
                .get('/products')
                .end((err, res) => {
                    expect(res.body[0]).to.eql(defaultProduct);
                    done(err);
                });
        });
    });
});