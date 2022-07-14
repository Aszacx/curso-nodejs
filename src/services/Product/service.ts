import { IProductService } from "./interface";
import Product from "../../models/Product.model";
import HttpStatusCode from "../../commons/constants/HttpStatusCode";
import { ProductTo } from "../../to/ProductoTo";

/**
 * @export
 * @implements {IProductModelService}
 */
const ProductService: IProductService = {
    /**
     * @returns {Promise < any[] >}
     * @memberof ProductFacade
     */
    async findAll(): Promise<any[]> {
        return Product.findAll();
    },

    async save(data: any): Promise<any> {
        const response: any = {};
        await Product.create(data);
        response.status = HttpStatusCode.OK;
        response.message = 'Created product';

        return response;
    }
}

export default ProductService;