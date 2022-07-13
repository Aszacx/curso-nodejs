import { IProductService } from "./interface";
import Product from "../../models/Product.model";

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
    }
}

export default ProductService;