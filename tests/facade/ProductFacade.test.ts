process.env.NODE_ENV = 'test'

import { expect } from "chai";
import ProductFacade from '../../src/facade/Product/facade';
import { db } from '../../src/config/connection/database';
import Product from "../../src/models/Product.model";

describe('ProductFacade Test', () => {

    before('Init', async() => {
        await db.sync({ force: true});
        Product.create({
        id: 1,
        name: 'test',
        description: 'description',
        qty: 10,
        createdAt: '2020-01-01',
        updatedAt: '2020-01-01'
        });
    });
  
    describe('FindAll', () => {
        it('should return one user', async () => {
            const Product: any[] = await ProductFacade.findAll();
            expect(1).equal(Product.length);
        });
    });
});