"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
process.env.NODE_ENV = 'test';
const chai_1 = require("chai");
const facade_1 = __importDefault(require("../../src/facade/Product/facade"));
const database_1 = require("../../src/config/connection/database");
const Product_model_1 = __importDefault(require("../../src/models/Product.model"));
describe('ProductFacade Test', () => {
    before('Init', () => __awaiter(void 0, void 0, void 0, function* () {
        yield database_1.db.sync({ force: true });
        Product_model_1.default.create({
            id: 1,
            name: 'test',
            description: 'description',
            qty: 10,
            createdAt: '2020-01-01',
            updatedAt: '2020-01-01'
        });
    }));
    describe('FindAll', () => {
        it('should return one user', () => __awaiter(void 0, void 0, void 0, function* () {
            const Product = yield facade_1.default.findAll();
            chai_1.expect(1).equal(Product.length);
        }));
    });
});
//# sourceMappingURL=ProductFacade.test.js.map