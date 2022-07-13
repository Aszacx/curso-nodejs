
/**
 * @export
 * @interface IProductFacade
 */
export interface IProductFacade {

    /**
     * @returns {Promise<any[]>}
     * @memberof IProductFacade
     */
    findAll(): Promise<any[]>;
}