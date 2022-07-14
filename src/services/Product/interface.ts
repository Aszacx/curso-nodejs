
/**
 * @export
 * @interface IProductService
 */
export interface IProductService {

    /**
     * @returns {Promise<any[]>}
     * @memberof IProductService
     */
    findAll(): Promise<any[]>;
    save(data: any): Promise<any[]>;
}